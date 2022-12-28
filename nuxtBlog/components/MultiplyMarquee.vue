<template>
  <div class="multiply-marquee">
    <div class="marquees">
      <marquee>
        <template #text>
          <span>we urban </span><strong><span>we</span></strong
          ><span>interior</span>
        </template>
      </marquee>
      <marquee :direction="false">
        <template #text>
          <span>estrutural</span><strong><span>are</span></strong
          ><span>living ae</span>
        </template>
      </marquee>
      <marquee>
        <template #text>
          <span>rustic</span><strong><span>about</span></strong
          ><span>futuristic</span>
        </template>
      </marquee>
      <marquee :direction="false">
        <template #text>
          <span>natural</span><strong><span>arch</span></strong
          ><span>modern</span>
        </template>
      </marquee>
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
import Marquee from '@/components/Marquee.vue'

export default {
  name: 'MultiplyMarquee',
  components: {
    Marquee,
  },
}
</script>

<style lang="scss" scoped>
.multiply-marquee {
  padding-top: 10rem;
  padding-bottom: 10rem;
  background: $alabaster;

  @include media-breakpoint-down(md) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .marquees {
    margin-bottom: 10rem;

    @include media-breakpoint-down(md) {
      margin-bottom: 5rem;
    }
  }

  .marquee {
    margin-bottom: 5rem;

    @include media-breakpoint-down(md) {
      margin-bottom: 2.5rem;
    }

    span {
      color: $alabaster;
    }

    strong {
      span {
        color: $black;
      }
    }
  }
}
</style>
