<template>
	<div class="title">
		<div class="content">
			<h1 class="h1" ref="title">FULL-CYCLE EVENT AGENCY</h1>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.onMouseMove();
	},
	methods: {
		onMouseMove() {
			addEventListener("mousemove", (event) => {
				const title = this.$refs.title;
				const x = (event.clientX * 3) / window.innerWidth + "%";
				const y = (event.clientY * 3) / window.innerHeight + "%";

				title.style.transform = `translate(${x},${y})`;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	position: relative;

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
	}
}
</style>
