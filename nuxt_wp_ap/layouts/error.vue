<template>
	<transition>
		<div class="error-page">
			<div class="container">
				<h1 v-if="error.statusCode === 404">Page not found</h1>
				<h1 v-else>An error occurred</h1>
				<nuxt-link class="link" to="/">Go to home page</nuxt-link>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	layout: "default",
	props: {
		error: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.error-page {
}
</style>
