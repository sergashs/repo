<template>
	<footer id="colophon" class="site-footer">
		<div class="container-fluid">
			<p>
				Design by Serhii D. <br />
				Авторське право на гру і використані в ній матеріали належить компанії GSC Game World <br />
				У разі повного або часткового копіювання матеріалів сайту, посилання на джерело обов'язкове! <br />
				© 2022 Stalker2-Fenomen
			</p>
		</div>
		<div class="footer-bg"><img data-src="https://stalker2-fenomen.info/wp-content/themes/stalker-by-serhii-d/assets/images/bg.jpg" src="https://stalker2-fenomen.info/wp-content/themes/stalker-by-serhii-d/assets/images/bg.jpg" alt="footer background" loading="lazy" class="lazyloaded" /></div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style lang="scss" scoped>
.site-footer {
	position: relative;
	max-width: 125rem;
	width: 100%;
	margin: auto;
	padding: 1.7rem 0;
	color: $gray;
	// background: url(#{$images}bg.jpg);
	background-position: 20% 70%;
	background-repeat: no-repeat;
	background-size: cover;
	border-left: solid 0.1rem $tuatara;
	border-right: solid 0.1rem $tuatara;
	border-bottom: solid 0.1rem $tuatara;
	box-shadow: 0.4rem 4rem 3rem rgba($black, 0.65);
	z-index: 5;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $tuatara;
		opacity: 0.5;
		z-index: 1;
		border-radius: 1rem;
	}

	.footer-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.container-fluid {
		position: relative;

		@include media-breakpoint-up(md) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		z-index: 1;
	}

	.counter-holder {
		opacity: 0.1;
		transition: $transition;

		&:hover {
			opacity: 1;
		}
	}
}
</style>
