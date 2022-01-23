<template>
	<div class="section-swiper">
		<swiper :breakpoints="swiperOptions.breakpoints" :slidesPerView="'auto'" :loop="true" :speed="600">
			<!-- :slidesPerView="'auto'" -->
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
		<div class="container">
			<div class="link-holder">
				<a href="#">
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
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/swiper.scss";

export default {
	name: "SectionSwiper",
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			APIData: [],
			swiperOptions: {
				breakpoints: {
					320: {
						spaceBetween: 30,
						slidesPerView: 1
					},
					768: {
						spaceBetween: 50,
						centeredSlides: "'true'"
					}
				}
			}
		};
	}
};
</script>

<style lang="scss">
@import "@/components/SectionSwiper/SectionSwiper.scss";
</style>
