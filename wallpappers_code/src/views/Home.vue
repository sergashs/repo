<script setup>
import { ref } from "vue";

const UNSPLASH_ACCESS_KEY = "VyoxZkHMlRKa2lr2dBxkJ8YdvSP9htPNchan2JdfQVA";

const loading = ref(false);
const error = ref(null);
const images = ref([]);

const category = ref("nature");
const count = ref(30);

const fetchImages = async () => {
  loading.value = true;
  error.value = null;
  images.value = [];

  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?query=${category.value}&count=${count.value}&client_id=${UNSPLASH_ACCESS_KEY}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    images.value = data;
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
    {{ query }}

    <n-space class="inputs-holder" justify="center" horizontal style="margin-bottom: 20px"
      ><n-select v-model:value="category" filterable tag :options="categoryOptions" placeholder="Select category" />

      <n-input-number v-model:value="count" :min="1" :max="30" placeholder="Number of images" />

      <n-button type="primary" @click="fetchImages">Get Images</n-button>
    </n-space>

    <n-space justify="center" horizontal>
      <n-spin v-if="loading" size="medium" />
      <div v-if="error" style="color: red">❌ {{ error }}</div>
    </n-space>

    <div v-if="images.length" class="grid">
      <div v-for="(img, i) in images" :key="i" class="image-card">
        <div>
          <img :src="img.urls.regular" />
          <n-space justify="center" horizontal style="margin-bottom: 20px">
            <n-button size="small" @click="downloadImage(img.urls.thumb)">Thumb</n-button>
            <n-button size="small" @click="downloadImage(img.urls.small)">Small</n-button>
            <n-button size="small" @click="downloadImage(img.urls.regular)">Regular</n-button>
            <n-button size="small" @click="downloadImage(img.urls.full)">Full</n-button>
            <n-button size="small" @click="downloadImage(img.urls.raw)">Raw</n-button>
          </n-space>
        </div>
      </div>
    </div>
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

img {
  margin-bottom: 5px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>
