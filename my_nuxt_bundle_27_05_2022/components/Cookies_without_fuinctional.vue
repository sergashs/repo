<template>
	<transition name="fade">
		<div v-if="isShow" class="cookies">
			<div class="inner-holder">
				<a href="#" class="icon-holder" @click.prevent="close">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.40002 6.40002L25.2 25.2" stroke="black" stroke-width="0.8" />
						<path d="M25.2 6.40002L6.40001 25.2" stroke="black" stroke-width="0.8" />
					</svg>
				</a>
				<div class="row g-0">
					<div class="col-md-7">
						<h3>We use cookies</h3>
						<div class="text-holder">
							<p>This website uses cookies to ensure you get the best expierence on our website.</p>
						</div>
					</div>
					<div class="col-md-5 d-md-flex align-items-md-end justify-content-md-end">
						<button class="btn btn-primary" @click="accept">Accept</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Cookies",

	data() {
		return {
			isShow: false
		};
	},
	mounted() {
		// localStorage.clear();

		const cookies = localStorage.getItem("cookiesAceept");

		if (cookies === true) {
			this.isShow = false;
		} else if (!cookies) {
			this.isShow = true;
		}
	},
	methods: {
		accept() {
			localStorage.setItem("cookiesAceept", true);

			this.isShow = false;
		},
		close() {
			this.isShow = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.cookies {
	.inner-holder {
		position: fixed;
		left: 2rem;
		bottom: 3.3rem;
		width: calc(100% - 4rem);
		max-width: 80rem;
		padding: 5rem 2rem 4rem 2rem;
		z-index: 100;
		font-size: 2rem;
		color: $black;
		background: $white;

		@include media-breakpoint-up(md) {
			width: 100%;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			bottom: 4rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 3rem 5rem 2rem 5rem;
			border: 1px solid rgba($black, 0.1);
			filter: drop-shadow(0px 6px 30px rgba(0, 0, 0, 0.2));
		}

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}
	}

	h3 {
		margin-bottom: 2.2rem;
		font-size: 2.8rem;
		line-height: 1;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.6rem;
			font-size: 2.4rem;
		}
	}

	.text-holder {
		font-size: 1.4rem;
		line-height: 1.5;

		@include media-breakpoint-down(md) {
			margin-bottom: 3.2rem;
		}
	}

	.btn {
		width: 100%;
		max-width: 22rem;

		@include media-breakpoint-down(sm) {
			max-width: 100%;
		}
	}

	.icon-holder {
		position: absolute;
		top: 2rem;
		right: 5rem;

		@include media-breakpoint-down(md) {
			right: 2rem;
		}
	}
}
</style>
