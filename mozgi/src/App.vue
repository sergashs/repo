<template>
	<router-view />
</template>

<script>
export default {
	mounted() {
		this.correctVh();
	},
	methods: {
		correctVh() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", vh + "px");
		}
	}
};
</script>

<style scoped>
@import "/fonts/style.css";
</style>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
