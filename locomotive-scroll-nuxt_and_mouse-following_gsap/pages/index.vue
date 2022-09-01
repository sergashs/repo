<template>
	<div class="home-page">
		<section class="d-flex h-screen" data-scroll-section data-scroll-offset="00">
			<div class="d-flex flex-grow-1 container">
				<div class="row flex-grow-1">
					<div class="col-md-6 d-flex align-items-center">
						<p data-scroll data-scroll-direction="vertical" data-scroll-speed="-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quia deleniti voluptatum minus fugiat, illum, tenetur impedit eveniet accusamus officia molestiae, esse debitis incidunt omnis in porro magni! Architecto, vel?</p>
					</div>
					<div class="col-md-6 d-flex align-items-center">
						<h1 data-scroll data-scroll-direction="vertical" data-scroll-speed="2">data-scroll-section #1</h1>
					</div>
				</div>
			</div>
		</section>
		<div data-scroll-section data-scroll-speed="2">
			<div class="row">
				<div class="col-md-6">
					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-12">Travelling leaves you speechless</p>
				</div>
				<div class="col-md-6">
					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="12">Then it turns you to a storyteller</p>
				</div>
			</div>
		</div>

		<section class="h-screen" data-scroll-section>
			<div class="container">
				<h1>data-scroll-section #2</h1>
			</div>
		</section>
		<section class="h-screen" data-scroll-section>
			<div class="container">
				<h1>data-scroll-section #3</h1>
			</div>
		</section>
		<CursorFollower />
	</div>
</template>

<script>
import CursorFollower from "@/components/CursorFollower";

export default {
	components: {
		CursorFollower
	},
	data() {
		return {
			scroll: null
		};
	},
	mounted() {
		this.locomotiveScrollInit();
	},
	beforeDestroy() {
		this.scroll.destroy();
	},
	methods: {
		locomotiveScrollInit() {
			this.scroll = new this.$LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]"),
				smooth: true,
				getDirection: true
				// scrollbarContainer: document.querySelector(".c-scrollbar")
			});
			// this.scroll.stop();
		}
	}
};
</script>

<style lang="scss">
.c-scrollbar {
	position: absolute;
	right: 0;
	top: 0;
	width: 11px;
	height: 100%;
	transform-origin: center right;
	transition: transform 0.3s, opacity 0.3s;
	opacity: 0;

	&:hover {
		transform: scaleX(1.45);
	}

	&:hover,
	.has-scroll-scrolling &,
	.has-scroll-dragging & {
		opacity: 1;
	}

	[data-scroll-direction="horizontal"] & {
		width: 100%;
		height: 10px;
		top: auto;
		bottom: 0;
		transform: scaleY(1);

		&:hover {
			transform: scaleY(1.3);
		}
	}
}

.c-scrollbar_thumb {
	position: absolute;
	top: 0;
	right: 0;
	background-color: black;
	opacity: 0.5;
	width: 7px;
	border-radius: 10px;
	margin: 2px;
	cursor: grab;

	.has-scroll-dragging & {
		cursor: grabbing;
	}

	[data-scroll-direction="horizontal"] & {
		right: auto;
		bottom: 0;
	}
}

.h-screen {
	height: 100vh;
}
</style>
