<template>
	<div class="text-circle" @mouseleave="stopRotate" @mouseover="rotate">
		<div ref="text">
			<img src="@/assets/images/showreel.svg" alt="..." />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			interval: null,
			count: null
		};
	},
	methods: {
		rotate() {
			const el = this.$refs.text;
			clearInterval(this.interval);

			this.interval = setInterval(() => {
				this.count++;
				el.style.transform = `rotate(-${this.count}deg)`;
			}, 10);
		},
		stopRotate() {
			clearInterval(this.interval);
		}
	}
};
</script>

<style lang="scss" scoped>
.text-circle {
	width: 115px;
	height: 113px;
	letter-spacing: 0.1px;

	@media (max-width: 575px) {
		width: 87px;
		height: 86px;
	}

	&::before {
		position: absolute;
		content: "";
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		width: 8px;
		height: 8px;
		background: #000000;
		border-radius: 50%;

		@media (max-width: 575px) {
			width: 6px;
			height: 6px;
		}
	}

	img {
		width: 100%;
		height: 100%;
	}
}
</style>
