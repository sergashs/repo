<template>
	<component :is="layout">
		<router-view />
	</component>
</template>

<script>
export default {
	computed: {
		layout() {
			return this.$route.meta.layout || "Default";
		}
	},
	methods: {
		correctVh() {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", vh + "px");
		}
	},
	mounted() {
		this.correctVh();
	}
};
</script>

<style lang="scss">
@import "ant-design-vue/dist/antd.css";

body {
	background: #e0e0e0;
}

.container {
	width: 100%;
	max-width: 1250px;
	margin: auto;
	padding-left: 10px;
	padding-right: 10px;
}
</style>
