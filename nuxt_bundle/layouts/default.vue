<template>
	<transition>
		<div class="wrapper">
			<Header />
			<main class="main">
				<nuxt />
			</main>
			<Footer />
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import globalBreakpoints from "@/mixins/globalBreakpoints";

export default {
	components: {
		Header,
		Footer
	},
	mixins: [globalBreakpoints]
};
</script>
