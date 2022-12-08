<template>
	<div class="title">
		<div class="content">
			<h1 class="h1" ref="title">FULL-CYCLE EVENT AGENCY</h1>
		</div>
		<slot />
	</div>
</template>

<script>
export default {
	mounted() {
		this.onMouseMove();
	},
	methods: {
		onMouseMove() {
			document.body.addEventListener("mousemove", (event) => {
				const title = this.$refs.title;

				if (title) {
					const x = (event.clientX * 3) / window.innerWidth + "%";
					const y = (event.clientY * 5) / window.innerHeight + "%";

					title.style.transform = `translate(${x},${y})`;
				}
			});
		}
	},
	beforeDestroy() {
		document.body.removeEventListener("click", () => {
			this.onMouseMove();
		});
	}
};
</script>

<style lang="scss" scoped>
.title {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 578px;
	min-height: 578px;

	@media (max-width: 1024px) {
		min-width: 482px;
		min-height: 482px;
	}

	@media (max-width: 575px) {
		min-width: 294px;
		min-height: 294px;
	}

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 578px;
		height: 578px;
		background: #ffcb46;
		filter: blur(38px);
		border-radius: 50%;

		@media (max-width: 1024px) {
			width: 482px;
			height: 482px;
		}

		@media (max-width: 575px) {
			width: 294px;
			height: 294px;
		}
	}

	.content {
		position: relative;
		z-index: 1;
	}

	.h1 {
		max-width: 1023px;
		margin-top: 0;
		margin-bottom: 0;
		font-weight: 700;
		font-size: 82px;
		line-height: 1.09;
		text-align: center;

		@media (max-width: 1024px) {
			font-size: 58px;
		}

		@media (max-width: 575px) {
			font-size: 34px;
		}
	}
}
</style>
