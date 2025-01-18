<template>
  <div class="card-game">
    <img :src="`/images/${convertId(data.id)}.webp`" :alt="data.title" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, default: () => ({ default: () => {} }) }
});

function convertId(id) {
  return id.replace(/\//g, "_");
}
</script>

<style lang="scss" scoped>
.card-game {
  position: relative;
  height: 286.46px;

  @media (max-width: 1441px) {
    height: 194px;
  }

  @media (max-width: 1281px) {
    height: 196px;
  }

  @media (max-width: 993px) {
    height: 272px;
  }

  @media (max-width: 769px) {
    height: 174px;
  }

  @media (max-width: 576px) {
    height: 174.64px;
  }

  @media (max-width: 321px) {
    height: 144px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
