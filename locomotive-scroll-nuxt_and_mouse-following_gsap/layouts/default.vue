<template>
	<transition>
		<div class="wrapper">
			<SmoothScroll>
				<Header />
				<main class="main">
					<nuxt />
				</main>
				<Footer />
			</SmoothScroll>
		</div>
	</transition>
</template>

<script>
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
	components: {
		Header,
		Footer,
		SmoothScroll
	}
};
</script>
