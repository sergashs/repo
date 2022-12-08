<template>
	<router-view v-slot="{ Component }">
		<transition>
			<component :is="Component" />
		</transition>
	</router-view>
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

<style lang="scss">
@import "/fonts/style.css";
@import "@/assets/scss/main.scss";
</style>
