<template>
  <div class="section-ticker">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionTicker',
}
</script>

<style lang="scss" scoped>
.section-ticker {
  padding: 10rem 0;

  @include media-breakpoint-down(md) {
    padding: 5rem 0;
  }
}
</style>
