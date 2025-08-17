import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import naive from 'naive-ui'

import { createPinia } from 'pinia'

import masonry from 'vue-next-masonry';

import router from './router';

const app = createApp(App);

app.use(naive);
app.use(createPinia());

app.use(masonry);

app.use(router);

app.mount('#app');