<template>
	<div class="home-page">
		<SmoothScroll>
			<div data-scroll-container>
				<section id="intro" class="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
					<div class="container px-5 mx-auto">
						<h1 class="text-5xl font-bold" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop">A Simple Demo With <a class="underline" href="https://locomotivemtl.github.io/locomotive-scroll/" target="_blank">Locomotive Scroll</a></h1>
						<p class="text-2xl mt-2">Scroll down 👇</p>
					</div>
				</section>
				<section class="py-40" data-scroll-section>
					<div class="container px-5 mx-auto">
						<nav>
							<ul class="grid md:grid-flow-col gap-8 lg:gap-16 justify-center text-center">
								<li>
									<a class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#about-section" data-scroll-to> About </a>
								</li>
								<li>
									<a class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#office" data-scroll-to> Office </a>
								</li>
								<li>
									<a class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#services" data-scroll-to> Services </a>
								</li>
								<li>
									<a class="inline-block relative text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#clients-section" data-scroll-to> Clients </a>
								</li>
								<li>
									<a class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#contact" data-scroll-to> Contact </a>
								</li>
							</ul>
						</nav>
					</div>
				</section>
				<section id="about-section" class="py-40 bg-green-50" data-scroll-section>
					<div class="container px-5 mx-auto">
						<div id="about" class="lg:grid grid-cols-2 gap-4 items-start">
							<h2 class="text-5xl font-extrabold" data-scroll data-scroll-sticky data-scroll-target="#about">About</h2>
							<div class="text-xl pt-4 lg:pt-0">
								<p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, ante sed lacinia ultricies, sapien massa ultricies erat, eu tristique justo est ut tortor. In nibh est, porttitor vulputate erat et, faucibus volutpat felis. Curabitur eleifend nisi quis consectetur euismod. Morbi ac condimentum ante. Aliquam euismod sodales arcu et iaculis. Cras porttitor nisl felis, eget interdum magna cursus et. Curabitur vehicula dignissim ornare.</p>
								<p class="mb-8">Cras lacinia sit amet justo ut maximus. Integer sapien felis, gravida a commodo et, porttitor non libero. Maecenas lacinia accumsan eros eu dapibus. Mauris dolor odio, vulputate vitae purus vitae, tincidunt egestas orci. Maecenas sollicitudin fringilla justo, id tempus metus elementum sit amet. Nullam vestibulum mauris vitae condimentum sagittis. Suspendisse sed purus vel neque ullamcorper ornare egestas vel ligula. Duis ac mattis odio. Aliquam sodales turpis nec diam maximus, nec fermentum massa mollis.</p>
								<p>Praesent finibus egestas velit, vitae tristique leo luctus sit amet. Vivamus eu facilisis neque, a venenatis mi. Vestibulum ultricies venenatis arcu sit amet fringilla. Curabitur non tincidunt sem. Sed quis quam ut nulla tincidunt dapibus quis ac lorem. Nulla lobortis ac metus ut molestie.</p>
							</div>
						</div>
					</div>
				</section>
				<section id="office" class="py-20" data-scroll-section>
					<div class="sm:grid grid-cols-2 gap-40">
						<figure class="flex items-end">
							<img class="shadow-lg h-auto" width="1000" height="667" src="https://assets.codepen.io/162656/office1.jpg?format=auto" alt="" data-scroll data-scroll-speed="4.8" />
						</figure>
						<figure>
							<img
								class="shadow-lg h-auto"
								width="1000"
								height="1498"
								src="https://assets.codepen.io/162656/office2.jpg?format=auto

"
								alt=""
								data-scroll
								data-scroll-speed="1.2"
							/>
						</figure>
					</div>
				</section>
				<section id="services" class="relative py-60 bg-green-50" data-scroll-section>
					<h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -skew-x-12 whitespace-nowrap text-6xl sm:text-9xl font-extrabold py-4">
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">S</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">e</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">r</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">v</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">i</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">c</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">e</span>
						<span class="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">s</span>
					</h2>
					<div class="transform rotate-6 skew-x-12">
						<div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#services">
							<span class="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Social Media — Email Marketing — Digital Advertising</span>
						</div>
					</div>
					<div class="transform -rotate-6 -skew-x-12 mt-40">
						<div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#services">
							<span class="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Web Development - Motion Design - Graphic Design</span>
						</div>
					</div>
				</section>
				<section id="clients-section" class="py-40" data-scroll-section>
					<div class="container px-5 mx-auto">
						<div id="clients" class="lg:grid grid-cols-2 gap-4 items-start">
							<h2 class="text-5xl font-extrabold" data-scroll data-scroll-sticky data-scroll-target="#clients">Clients</h2>
							<div class="text-xl pt-4 lg:pt-0">
								<p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, ante sed lacinia ultricies, sapien massa ultricies erat, eu tristique justo est ut tortor. In nibh est, porttitor vulputate erat et, faucibus volutpat felis. Curabitur eleifend nisi quis consectetur euismod. Morbi ac condimentum ante. Aliquam euismod sodales arcu et iaculis. Cras porttitor nisl felis, eget interdum magna cursus et. Curabitur vehicula dignissim ornare.</p>
								<p class="mb-8">Cras lacinia sit amet justo ut maximus. Integer sapien felis, gravida a commodo et, porttitor non libero. Maecenas lacinia accumsan eros eu dapibus. Mauris dolor odio, vulputate vitae purus vitae, tincidunt egestas orci. Maecenas sollicitudin fringilla justo, id tempus metus elementum sit amet. Nullam vestibulum mauris vitae condimentum sagittis. Suspendisse sed purus vel neque ullamcorper ornare egestas vel ligula. Duis ac mattis odio. Aliquam sodales turpis nec diam maximus, nec fermentum massa mollis.</p>
								<p>Praesent finibus egestas velit, vitae tristique leo luctus sit amet. Vivamus eu facilisis neque, a venenatis mi. Vestibulum ultricies venenatis arcu sit amet fringilla. Curabitur non tincidunt sem. Sed quis quam ut nulla tincidunt dapibus quis ac lorem. Nulla lobortis ac metus ut molestie.</p>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" class="py-80 border-t-2 border-solid border-gray-50" data-scroll-section>
					<div class="container px-5 mx-auto text-center">
						<h2 class="text-2xl sm:text-5xl font-extrabold py-4" data-scroll data-scroll-repeat data-scroll-call="randomizeTextColor">
							<span class="inline-block" data-scroll data-scroll-delay="0.15" data-scroll-speed="5">h</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.095" data-scroll-speed="5">e</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.085" data-scroll-speed="5">l</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.075" data-scroll-speed="5">l</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.065" data-scroll-speed="5">o</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.055" data-scroll-speed="5">@</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.045" data-scroll-speed="5">g</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.035" data-scroll-speed="5">e</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.035" data-scroll-speed="5">o</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.045" data-scroll-speed="5">r</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.055" data-scroll-speed="5">g</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.065" data-scroll-speed="5">e</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.075" data-scroll-speed="5">.</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.085" data-scroll-speed="5">c</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.095" data-scroll-speed="5">o</span>
							<span class="inline-block" data-scroll data-scroll-delay="0.15" data-scroll-speed="5">m</span>
						</h2>
					</div>
				</section>
				<section class="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
					<div class="container px-5 mx-auto">
						<p class="text-3xl">Check more <a class="underline" href="https://tutsplus.com/authors/george-martsoukos" target="_blank">hands-on tutorials</a> 🤓</p>
					</div>
				</section>
				<a class="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600 transition opacity-0 invisible" href="#intro" role="button" aria-label="Back to top" data-scroll-to>
					<svg class="fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
						<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
					</svg>
				</a>
			</div>

			<footer class="page-footer">
				<span>made by </span>
				<a href="https://georgemartsoukos.com/" target="_blank">
					<img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo" />
				</a>
			</footer>
		</SmoothScroll>
		<CursorFollower />
	</div>
</template>

<script>
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";

export default {
	components: {
		SmoothScroll,
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
				smooth: true
				// getDirection: true
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
