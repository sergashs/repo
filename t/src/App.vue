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
	}
};
</script>

<style lang="scss">
.container {
	width: 100%;
	max-width: 1250px;
	margin: auto;
	padding-left: 20px;
	padding-right: 20px;
}
</style>
