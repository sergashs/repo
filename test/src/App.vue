<template>
	<Header />
	<router-view />
</template>

<script>
import WebFontLoader from "webfontloader";
import Header from "@/components/Header";

export default {
	components: {
		Header
	},
	created() {
		WebFontLoader.load({
			custom: {
				families: ["Grtsk Giga:n6,n7"],
				urls: ["/fonts/stylesheet.css"]
			},
			active: this.setFontLoaded
		});
	},
	mounted() {
		this.correctVh();
	},
	methods: {
		setFontLoaded() {
			this.$emit("font-loaded");
		},
		correctVh() {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", vh + "px");
		}
	}
};
</script>
