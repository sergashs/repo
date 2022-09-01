<template>
	<transition name="fade">
		<div v-if="isOpen" class="modal-overlay" @click="handleClose">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="modal-title" />
					<a href="#" class="close-icon" @click.prevent="handleClose">
						<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="0.353553" y1="0.646447" x2="28.6378" y2="28.9307" stroke="black" />
							<line x1="28.6377" y1="1.35355" x2="0.353462" y2="29.6378" stroke="black" />
						</svg>
					</a>
				</div>
				<slot name="modal-body" />
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Modal",
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		handleOpen() {
			this.isOpen = true;
			const scrollWidth = window.innerWidth - document.getElementsByTagName("html")[0].clientWidth;
			document.body.style.paddingRight = scrollWidth + "px";
			document.body.style.overflow = "hidden";
		},
		handleClose() {
			this.isOpen = false;

			setTimeout(() => {
				document.body.style.removeProperty("padding-right");
				document.body.style.removeProperty("overflow");
			}, 250);
		}
	}
};
</script>

<style lang="scss" scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000000da;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 101;

	@include media-breakpoint-down(md) {
		padding: 2rem;
	}

	.modal {
		position: relative;
		width: 100%;
		max-width: 800px;
		background-color: $white;
		padding: 4rem;
		overflow: auto;
		border-radius: 1.2rem;

		@include media-breakpoint-down(md) {
			padding: 4.4rem 4rem;
		}
	}

	.close-icon {
		position: absolute;
		top: 4rem;
		right: 4rem;
		display: inline-block;
		width: 2.3rem;

		@include media-breakpoint-down(md) {
			top: 1.5rem;
			right: 1.5rem;
			width: 2rem;
		}

		svg {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
