
import { defineNuxtPlugin } from "#app";
import Button from "primevue/button";
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import Antd from 'ant-design-vue';
import InputText from 'primevue/inputtext';
import 'ant-design-vue/dist/antd.css';
import 'primeicons/primeicons.css';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Antd, { ripple: true });
	nuxtApp.vueApp.component('Button', Button);
	nuxtApp.vueApp.component('Card', Card);
	nuxtApp.vueApp.component('Textarea', Textarea);
	nuxtApp.vueApp.component('InputText', InputText);
});