import { createStore } from 'vuex';
import { user } from './modules/user';
import { auth } from './modules/auth';

const store = createStore({
	modules: { user, auth }
});

export default store



// import { createStore } from "vuex";
// // import theme from "./theme";

// const store = createStore({
// 	state() {
// 		return {
// 			counter: 0,
// 		};
// 	},
// 	mutations: {

// 	},
// 	actions: {

// 	},
// 	modules: {
// 		// Add modules here
// 		// theme: theme,
// 	},
// });

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.vueApp.use(store);
// });