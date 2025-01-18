// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["primevue/resources/themes/saga-blue/theme.css", "primevue/resources/primevue.css", "~/assets/scss/style.scss"],
	build: {
		transpile: ["primevue"]
	},
	plugins: ["~/plugins/primevue.js"],
	generate: {
		routes: ["/login", "/register"]
	}
});
