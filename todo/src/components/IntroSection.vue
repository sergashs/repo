<template>
	<div class="intro-section">
		<div class="container">
			<h1>
				<slot name="title"></slot>
			</h1>
		</div>
		<div class="img-holder">
			<img src="@/assets/images/img-01.jpg" alt="background of section" />
		</div>
	</div>
</template>

<script>
export default {
	name: "IntroSection"
};
</script>

<style lang="scss" scoped>
.intro-section {
	position: relative;
	padding-top: 20rem;
	padding-bottom: 7rem;
	color: $white;

	@include screen($lg, "max") {
		padding-top: 12rem;
		padding-bottom: 4rem;
	}

	.img-holder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	h1 {
		margin-bottom: 0;
		font-weight: 400;
		font-size: 5.5rem;
		line-height: 1.56;

		@include screen($lg, "max") {
			font-size: 3.5rem;
			line-height: 1.4;
		}
	}

	.container {
		position: relative;
		z-index: 2;
	}

	&.h1-sm-width {
		h1 {
			@include screen($md, "min") {
				width: 52%;
			}

			@include screen($lg, "min") {
				width: 55%;
			}
		}
	}
}
</style>
