import Store from "@/store/index.js"

const store = Store;

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(store);
});