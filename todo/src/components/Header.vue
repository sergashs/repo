<template>
	<header class="header">
		<div class="line"></div>
		<div class="container">
			<div class="inner-holder">
				<strong class="logo">
					<router-link to="/">
						<img src="@/assets/images/icon-logo.svg" alt="icon logo" />
					</router-link>
				</strong>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
	background: linear-gradient(180deg, $cerulean 0%, $endeavour 100%);

	.line {
		padding: 2.65rem 0;
		background: $mine-shaft;

		@include screen($lg, "max") {
			padding: 1.85rem 0;
		}
	}

	.inner-holder {
		padding: 1.5rem 0;

		@include screen($lg, "max") {
			padding: 1rem 0;
		}
	}

	.logo {
		a {
			display: inline-flex;
			max-width: 10.3rem;

			@include screen($lg, "max") {
				max-width: 8rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
