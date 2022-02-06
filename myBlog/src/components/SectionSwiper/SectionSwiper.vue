<template>
	<div class="section-swiper">
		<swiper
			:slidesPerView="'auto'"
			:loop="true"
			:speed="600"
			:breakpoints="{
				'320': {
					slidesPerView: 1,
					spaceBetween: 30
				},
				'768': {
					slidesPerView: 'auto',
					spaceBetween: 50,
					centeredSlides: true
				}
			}"
		>
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
			<div class="link-holder">
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
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/swiper.scss";

export default {
	name: "SectionSwiper",
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
@import "@/components/SectionSwiper/SectionSwiper.scss";
</style>
