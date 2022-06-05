<template>
	<router-view />
</template>

<script>
import WebFontLoader from "webfontloader";

export default {
	created() {
		WebFontLoader.load({
			google: {
				families: ["Roboto:300,400,500"]
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
