<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>test text</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Marquee',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 10,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
          delay: 1,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.section-swiper {
  .swiper-slide {
    @include media-breakpoint-up(lg) {
      max-width: 60%;
    }

    .img-holder {
      margin-bottom: 10rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 5rem;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    h3 {
      margin-bottom: 10rem;
      font-family: $syncopate;
      font-weight: 700;
      font-size: 4.8rem;
      color: $mercury;
      letter-spacing: 0.04rem;
      text-align: center;
      text-transform: lowercase;
      transition: $transition;

      @include media-breakpoint-down(md) {
        margin-bottom: 5rem;
        font-size: 2.9rem;
      }
    }

    &.swiper-slide-active {
      h3 {
        color: $black;
        transition: $transition;
      }
    }
  }

  .link-holder {
    display: flex;
    justify-content: center;
    padding-bottom: 10rem;
    border-bottom: 0.1rem solid $porcelain;

    @include media-breakpoint-down(md) {
      padding-bottom: 5rem;
    }

    a {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      font-size: 2.4rem;
      letter-spacing: 0.04rem;

      @include media-breakpoint-down(md) {
        font-size: 1.8rem;
      }

      &:hover {
        .icon-holder {
          transform: translateX(0.5rem);
          transition: $transition;
        }
      }

      .icon-holder {
        display: inline-flex;
        width: 2.4rem;
        height: 2.4rem;
        margin-left: 1rem;
        transition: $transition;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
