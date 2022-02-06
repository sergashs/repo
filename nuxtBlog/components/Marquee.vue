<template>
  <!-- <client-only> </client-only> -->
  <div class="marquee">
    <span>i build magic</span>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
}
</script>

<style lang="scss" scoped>
.marquee {
  font-family: $syncopate;
  font-size: 7.2rem;

  @include media-breakpoint-down(md) {
    font-size: 3.15rem;
  }

  .marquee {
    color: $white;
    text-shadow: -0.1rem 0 $black, 0 0.1rem $black, 0.1rem 0 $black,
      0 -0.1rem $black;

    p {
      margin-bottom: 0;
    }

    span {
      padding: 0 2.25rem;
    }

    strong {
      color: $black;
    }
  }
}
</style>
