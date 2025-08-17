<script setup>
import { ref } from "vue";

const UNSPLASH_ACCESS_KEY = "VyoxZkHMlRKa2lr2dBxkJ8YdvSP9htPNchan2JdfQVA";

const loading = ref(false);
const error = ref(null);
const images = ref([]);

const category = ref("nature");
const count = ref(30);

const loaded = ref([]);

const onImageLoad = (i) => {
  loaded.value[i] = true;
};

const fetchImages = async () => {
  loading.value = true;
  error.value = null;
  images.value = [];

  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?query=${category.value}&count=${count.value}&client_id=${UNSPLASH_ACCESS_KEY}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    images.value = data;
    loaded.value = Array(data.length).fill(false);
    console.log(images.value);
  } catch (err) {
    error.value = err.message;
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
  { label: "Nature", value: "nature" },
  { label: "Travel", value: "travel" },
  { label: "Food", value: "food" },
  { label: "Technology", value: "technology" },
  { label: "Animals", value: "animals" },
  { label: "Architecture", value: "architecture" },
  { label: "Fashion", value: "fashion" },
  { label: "Sports", value: "sports" }
];
</script>

<template>
  <div class="container">
    <n-space class="inputs-holder" justify="center" horizontal style="margin-bottom: 20px"
      ><n-select v-model:value="category" filterable tag :options="categoryOptions" placeholder="Select category" />

      <n-input-number v-model:value="count" :min="1" :max="30" placeholder="Number of images" />

      <n-button type="primary" @click="fetchImages">Get Images</n-button>
    </n-space>

    <n-space justify="center" horizontal>
      <n-spin v-if="loading" size="medium" />
      <div v-if="error" style="color: red">❌ {{ error }}</div>
    </n-space>

    <masonry :cols="{ default: 3, 992: 2, 768: 1 }" :gutter="20">
      <div v-for="(img, i) in images" :key="i">
        <div class="image-card" :class="getOrientation(img)">
          <n-skeleton v-if="!loaded[i]" height="400px" width="100%" :style="{ borderRadius: '8px' }" />
          <img v-show="loaded[i]" :src="img.urls.regular" @load="onImageLoad(i)" />

          <n-space v-show="loaded[i]" justify="center" horizontal style="margin-bottom: 20px">
            <n-button size="small" @click="downloadImage(img.urls.thumb)">Thumb</n-button>
            <n-button size="small" @click="downloadImage(img.urls.small)">Small</n-button>
            <n-button size="small" @click="downloadImage(img.urls.regular)">Regular</n-button>
            <n-button size="small" @click="downloadImage(img.urls.full)">Full</n-button>
            <n-button size="small" @click="downloadImage(img.urls.raw)">Raw</n-button>
          </n-space>
        </div>
      </div>
    </masonry>

    <!-- <div v-if="images.length" class="grid">
      <div v-for="(img, i) in images" :key="i" class="image-card">
        <div>
          <img :src="img.urls.regular" />
        </div>
      </div>
    </div> -->
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
}
</style>
