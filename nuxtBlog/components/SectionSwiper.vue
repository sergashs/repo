<template>
  <div class="section-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="img-holder">
          <img src="@/assets/images/img-01.jpg" alt="#" />
        </div>
        <h3>Project #1</h3>
      </swiper-slide>
      <swiper-slide>
        <div class="img-holder">
          <img src="@/assets/images/img-02.jpg" alt="#" />
        </div>
        <h3>Project #2</h3>
      </swiper-slide>
      <swiper-slide>
        <div class="img-holder">
          <img src="@/assets/images/img-03.jpg" alt="#" />
        </div>
        <h3>Project #3</h3>
      </swiper-slide>
    </swiper>
    <div class="container-fluid">
      <div class="btn-holder">
        <a href="#" class="btn btn-arrow">
          discover our projects
          <span class="icon-holder">
            <img src="@/assets/images/icon-01.svg" alt="#" />
          </span>
        </a>
      </div>
    </div>
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
        speed: 600,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 50,
            centeredSlides: true,
          },
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
}
</style>
