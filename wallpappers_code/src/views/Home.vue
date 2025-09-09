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

function downloadImage(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "unsplash-image.jpg";
  link.target = "_blank";
  link.click();
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
</script>

<template>
  <div class="container" style="padding-top: 20px; padding-bottom: 20px">
    <n-space class="inputs-holder" justify="center" horizontal style="margin-bottom: 20px">
      <n-select v-model:value="category" filterable tag :options="categoryOptions" placeholder="Select category" />
      <n-button type="primary" @click="fetchImages">Get Images</n-button>
    </n-space>
    <n-space justify="center" horizontal>
      <n-spin v-if="loading" size="medium" />
      <div v-if="error" style="color: red">❌ API request limit exceeded. Requests will reset in one hour. Please try again later.</div>
    </n-space>
    <masonry :cols="{ default: 3, 992: 2, 768: 1 }" :gutter="20">
      <div v-for="(img, i) in images" :key="i">
        <div class="image-card" :class="getOrientation(img)">
          <n-skeleton v-if="!loaded[i]" height="100%" width="100%" :style="{ borderRadius: '8px' }" />
          <img :src="img.urls.regular" :class="{ loaded: loaded[i] }" @load="onImageLoad(i)" />
          <n-space v-show="loaded[i]" justify="center" horizontal style="margin-bottom: 20px">
            <n-button type="primary" size="small" @click="downloadImage(img.urls.small)">Small</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.regular)">Regular</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.full)">Full</n-button>
            <n-button type="primary" size="small" @click="downloadImage(img.urls.raw)">Raw</n-button>
          </n-space>
        </div>
      </div>
    </masonry>

    <n-pagination v-model:page="page" :page-count="totalPages" @update:page="fetchImages" />
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
  transition: 0.5s ease-in;
}

img.loaded {
  opacity: 1;
}

.n-skeleton {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
