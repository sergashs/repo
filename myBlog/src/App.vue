<template>
	<Header />
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->
	<router-view />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import WebFontLoader from "webfontloader";

export default {
	components: {
		Header
	},
	created() {
		WebFontLoader.load({
			google: {
				families: ["Syncopate:500,700", "Montserrat:400,500"]
			},
			// custom: {
			// 	families: ["Rubik:n4,n5,n7"],
			// 	urls: ["/static/assets/fonts/stylesheet.css"]
			// },
			active: this.setFontLoaded
		});
	},
	methods: {
		setFontLoaded() {
			this.$emit("font-loaded");
		}
	}
};
</script>
