<template>
	<div class="cursor-follower"></div>
</template>

<script>
export default {
	mounted() {
		this.setCursorAnimation();
	},
	methods: {
		setCursorAnimation() {
			/**
			 * Mouse Follower (GSAP3)
			 * Code by Blake Bowen
			 * @link https://codepen.io/osublake/pen/dce29f9c14192035dbf55a32181f0bdc
			 */
			const gsap = this.$gsap;
			const cursorFollower = document.querySelector(".cursor-follower");
			const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			const mouse = { x: pos.x, y: pos.y };
			const speed = 0.13;
			const fpms = 60 / 1000;
			const xSet = gsap.quickSetter(cursorFollower, "x", "px");
			const ySet = gsap.quickSetter(cursorFollower, "y", "px");
			const links = document.querySelectorAll("a");

			window.addEventListener("mousemove", (e) => {
				mouse.x = e.x;
				mouse.y = e.y;
				gsap.set(".cursor-follower", {
					opacity: 1,
					duration: 0.3,
					ease: "expo.out"
				});
			});
			gsap.ticker.add((time, deltaTime) => {
				const delta = deltaTime * fpms;
				const dt = 1.0 - Math.pow(1.0 - speed, delta);
				pos.x += (mouse.x - pos.x) * dt;
				pos.y += (mouse.y - pos.y) * dt;
				xSet(pos.x);
				ySet(pos.y);
			});

			function linkAnimIn() {
				gsap.to(cursorFollower, {
					duration: 0.3,
					scale: 1.8
				});
			}

			function linkAnimOut() {
				gsap.to(cursorFollower, {
					duration: 0.3,
					scale: 1
				});
			}

			links.forEach((link) => {
				link.addEventListener("mouseover", (e) => {
					linkAnimIn();
				});
				link.addEventListener("mouseout", (e) => {
					linkAnimOut();
				});
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.cursor-follower {
	z-index: 1000;
	position: fixed;
	width: 3.3rem;
	height: 3.3rem;
	top: 0;
	left: 0;
	border-radius: 50%;
	border: solid 0.2rem $black;
	opacity: 0;
	mix-blend-mode: difference;
	pointer-events: none;
	transform: translate3d(-50%, -50%, 0);
}
</style>
