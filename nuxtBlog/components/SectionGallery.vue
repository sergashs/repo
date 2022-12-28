<template>
  <div class="section-gallery">
    <div class="img-holder">
      <img src="@/assets/images/img-05.jpg" alt="#" />
    </div>
    <div class="btn-holder">
      <a href="#" class="btn btn-arrow">
        what our customers say
        <span class="icon-holder">
          <img src="@/assets/images/icon-01.svg" alt="#" />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionGallery',
}
</script>

<style lang="scss" scoped>
.section-gallery {
  padding-bottom: 10rem;

  @include media-breakpoint-down(md) {
    padding-bottom: 5rem;
  }

  .img-holder {
    margin-bottom: 10rem;

    @include media-breakpoint-down(md) {
      margin-bottom: 5rem;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
