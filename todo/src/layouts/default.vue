<template>
	<div class="wrapper">
		<Header />
		<main id="main">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Default",
	components: {
		Header,
		Footer
	}
};
</script>
