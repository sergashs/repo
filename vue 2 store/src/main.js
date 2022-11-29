import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import { Picker, Slider, Button, Circle, Dialog, DatetimePicker, Tab, Tabs, Notify } from 'vant';
import VCalendar from 'v-calendar';

import 'vant/lib/index.css';

Vue.component('VueSlider', VueSlider)

Vue.use(Circle);
Vue.use(Button);
Vue.use(Slider);
Vue.use(Dialog);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(VCalendar);
Vue.use(Notify);
Vue.use(Tab);
Vue.use(Tabs);

import "@/assets/scss/style.scss";

new Vue({
    el: "#app",
    router: router,
    store,
    i18n,
    render: h => h(App),
})


