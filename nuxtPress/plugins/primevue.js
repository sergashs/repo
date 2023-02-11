
import { defineNuxtPlugin } from "#app";
// import PrimeVue from "primevue/config";
// import Button from "primevue/button";
// import Card from "primevue/card";
// import InputText from "primevue/inputtext"
// import ToastService from 'primevue/toastservice';
// import Toast from 'primevue/toast';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Antd, { ripple: true });
	// nuxtApp.vueApp.component('Button', Button);
	// nuxtApp.vueApp.component('Card', Card);
	// nuxtApp.vueApp.component('InputText', InputText);
	// nuxtApp.vueApp.component('ToastService', ToastService);
	// nuxtApp.vueApp.component('Toast', Toast);
	//other components that you need
});