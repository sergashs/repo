<template>
	<transition name="fade">
		<button v-if="isShow" class="go-to-top" @click="scrollToTop()">
			<span class="arrow-holder"
				><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.2 13.2L12 1.99995L0.799951 13.1999" stroke="white" stroke-width="2" />
					<path d="M11.9999 2L11.9999 22" stroke="white" stroke-width="2" />
				</svg>
			</span>
		</button>
	</transition>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";

export default {
	name: "GoTopBtn",
	data: () => ({
		isShow: false
	}),
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		smoothscroll.polyfill();
	},
	methods: {
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
		handleScroll() {
			if (pageYOffset >= 500) {
				this.isShow = true;
			} else {
				this.isShow = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.go-to-top {
	position: fixed;
	right: 3rem;
	bottom: 6rem;
	width: 7rem;
	height: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba($black, 0.6);
	border: none;
	transition: $transition;
	z-index: 10;

	@include media-breakpoint-down(md) {
		right: 1.5rem;
		bottom: 6rem;
		width: 5.5rem;
		height: 5.5rem;
	}

	&:hover {
		background: rgba($black, 1);
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
