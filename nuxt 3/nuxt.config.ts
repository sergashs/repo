// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["nuxt-font-loader", "nuxt-swiper"],
	swiper: {
		prefix: "Swiper",
		modules: "*",
		styleLang: "css"
	},

	components: {
		global: true,
		dirs: ["~/components"]
	},

	fontLoader: {
		local: [
			{
				src: "/fonts/Onest/Onest-Regular.woff2",
				weight: "400",
				family: "Onest"
			},
			{
				src: "/fonts/Onest/Onest-Medium.woff2",
				weight: "500",
				family: "Onest"
			},
			{
				src: "/fonts/Onest/Onest-Bold.woff2",
				weight: "700",
				family: "Onest"
			},
			{
				src: "/fonts/Onest/Onest-Black.woff2",
				weight: "900",
				family: "Onest"
			}
		]
	},

	css: ["@/assets/scss/styles.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "~/node_modules/bootstrap/scss/_mixins.scss"; @import "./assets/scss/_mixins.scss"; @import "./assets/scss/_vars.scss";'
				}
			}
		}
	}
});
