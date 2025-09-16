<script setup>
import { ref, watch, onMounted } from "vue";

const UNSPLASH_ACCESS_KEY = "VyoxZkHMlRKa2lr2dBxkJ8YdvSP9htPNchan2JdfQVA";
const loading = ref(false);
const error = ref(null);
const images = ref([]);

const category = ref("nature");
const count = ref(30);

const loaded = ref([]);

const page = ref(1);
const totalPages = ref(0);
const totalResults = ref(0);

const onImageLoad = (i) => {
  loaded.value[i] = true;
};

const fetchImages = async (p = page.value) => {
  loading.value = true;
  error.value = null;
  images.value = [];

  try {
    const perPage = Math.min(count.value, 30);
    const maxPages = Math.floor(1000 / perPage);

    const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(category.value)}&page=${p}&per_page=${perPage}&client_id=${UNSPLASH_ACCESS_KEY}`);

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    console.log("unsplash:", data);

    images.value = data.results || [];
    totalResults.value = data.total || 0;

    totalPages.value = Math.min(data.total_pages || 0, maxPages);

    if (p > totalPages.value && totalPages.value > 0) {
      images.value = [];
    }

    loaded.value = Array(images.value.length).fill(false);
    page.value = p;
  } catch (err) {
    error.value = err.message || String(err);
  } finally {
    loading.value = false;
  }
};

// function downloadImage(url) {
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "unsplash-image.jpg";
//   link.target = "_blank";
//   link.click();
// }

async function downloadImage(url, filename = "unsplash-image.jpg") {
  try {
    const response = await fetch(url, {
      mode: "cors"
    });
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (err) {
    console.error("Download failed:", err);
  }
}

function getOrientation(img) {
  if (img.width > img.height) return "landscape";
  if (img.width < img.height) return "portrait";
  return "square";
}

const categoryOptions = [
  { label: "Animals", value: "animals" },
  { label: "Nature", value: "nature" },
  { label: "Travel", value: "travel" },
  { label: "Food", value: "food" },
  { label: "Technology", value: "technology" },
  { label: "Architecture", value: "architecture" },
  { label: "Fashion", value: "fashion" },
  { label: "Sports", value: "sports" }
];

watch([category, count], () => {
  page.value = 1;
  fetchImages(1);
});

onMounted(() => fetchImages(1));

const options = ref([
  { label: "Small", key: "small" },
  { label: "Regular", key: "regular" },
  { label: "Full", key: "full" },
  { label: "Raw", key: "raw" }
]);

function handleSelect(key, img) {
  const url = img.urls[key];

  // console.log(img, key);

  if (url) {
    downloadImage(url, `${img.alt_description}.jpg`);
  }
}
</script>

<template>
  <div class="container" style="padding-top: 20px; padding-bottom: 20px">
    <n-space class="inputs-holder" justify="center" horizontal style="margin-bottom: 20px">
      <n-select v-model:value="category" filterable tag :options="categoryOptions" placeholder="Select category" />
      <!-- <n-button type="primary" @click="fetchImages">Get Images</n-button> -->
    </n-space>
    <n-space justify="center" horizontal>
      <n-spin v-if="loading" size="medium" />
      <div v-if="error" style="color: red">❌ API request limit exceeded. Requests will reset in one hour. Please try again later.</div>
    </n-space>

    <div class="columns">
      <div v-for="(img, i) in images" :key="i">
        <div class="image-card" :class="getOrientation(img)">
          <n-skeleton v-if="!loaded[i]" height="100%" width="100%" :style="{ borderRadius: '8px' }" />
          <img :src="img.urls.regular" :class="{ loaded: loaded[i] }" @load="onImageLoad(i)" />
          <n-space v-show="loaded[i]" justify="end" horizontal style="margin-bottom: 20px">
            <n-dropdown trigger="click" :options="options" @select="(key) => handleSelect(key, img)">
              <n-button type="primary" size="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
                </svg>
              </n-button>
            </n-dropdown>

            <!-- <n-button type="primary" size="small" @click="downloadImage(img.urls.small, 'small.jpg')">Small</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.regular, 'regular.jpg')">Regular</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.full, 'full.jpg')">Full</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.raw, 'raw.jpg')">Raw</n-button> -->
          </n-space>
        </div>
      </div>
    </div>

    <n-pagination v-if="images.length > 0" v-model:page="page" :page-count="totalPages" @update:page="(p) => fetchImages(p)" />
  </div>
</template>

<style scoped>
.grid {
  column-count: 3;
  column-gap: 20px;
}

@media (max-width: 992px) {
  .grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .grid {
    column-count: 1;
  }
}

.image-card {
  position: relative;
  margin-bottom: 20px;
}

.image-card.landscape {
  padding-bottom: 70%;
}

.image-card.square {
  padding-bottom: 100%;
}

.image-card.portrait {
  padding-bottom: 150%;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  opacity: 0;
  /* transition: 0.7s ease; */
}

img.loaded {
  opacity: 1;
}

.n-skeleton {
  position: absolute;
  top: 0;
  left: 0;
}

.columns {
  margin-bottom: 30px;
  columns: 3;
  column-gap: 20px;
}

@media (max-width: 992px) {
  .columns {
    columns: 2;
  }
}

@media (max-width: 768px) {
  .columns {
    columns: 1;
  }
}
</style>
