<template>
  <div class="marquee">
    <client-only>
      <marquee-text :duration="30" :clone="true" :reverse="direction">
        <slot name="text"></slot>
      </marquee-text>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    direction: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.marquee {
  font-family: $syncopate;
  font-size: 7.2rem;

  @include media-breakpoint-down(md) {
    font-size: 3.15rem;
  }

  .marquee-text-wrap {
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

    // .marquee-text-text {
    //   &:nth-child(2) {
    //     color: $black;
    //   }
    // }
  }
}
</style>
