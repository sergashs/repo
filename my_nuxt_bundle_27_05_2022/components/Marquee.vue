<template>
	<div class="marquee">
		<!-- <client-only>
			<dynamic-marquee class="marquee-holder" :direction="'row'" :repeat-margin="20" :hover-pause="false">
				<h2>{{ title }}</h2>
			</dynamic-marquee>
		</client-only> -->

		<h2>{{ title }}</h2>
	</div>
</template>

<script>
// import DynamicMarquee from "vue-dynamic-marquee";

export default {
	name: "Marquee",
	components: {
		// DynamicMarquee
	},
	props: {
		title: {
			type: String,
			default: "Marquee title",
			require: false
		}
	},
	mounted() {
		window.addEventListener("load", this.marquee(".marquee", 0.3));
	},
	methods: {
		marquee(selector, speed) {
			const parentSelector = document.querySelector(selector);
			const clone = parentSelector.innerHTML;
			const firstElement = parentSelector.children[0];
			let i = 0;
			parentSelector.insertAdjacentHTML("beforeend", clone);
			parentSelector.insertAdjacentHTML("beforeend", clone);
			parentSelector.insertAdjacentHTML("beforeend", clone);
			parentSelector.insertAdjacentHTML("beforeend", clone);

			setInterval(function () {
				firstElement.style.marginLeft = `-${i}px`;

				// parentSelector.style.transform = `translateX(-${i}px)`;

				if (i > firstElement.clientWidth) {
					i = 0;
				}

				i = i + speed;
			}, 0);
		}
	}
};
</script>

<style lang="scss" scoped>
.marquee {
	overflow: hidden;
	display: flex;
	padding-top: 18rem;
	padding-bottom: 18rem;

	@include media-breakpoint-down(md) {
		padding-top: 8rem;
		padding-bottom: 8rem;
	}

	.marquee-holder {
		min-height: 14rem;

		@include media-breakpoint-down(md) {
			min-height: 6rem;
		}
	}

	h2 {
		margin-bottom: 0;
		padding-right: 5rem;
		font-size: 9.6rem;
		line-height: 1.48;
		white-space: nowrap;

		@include media-breakpoint-down(md) {
			font-size: 3.6rem;
			padding-right: 2rem;
		}
	}
}
</style>
