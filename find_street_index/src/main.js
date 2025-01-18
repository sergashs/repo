import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

//components

import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';


const app = createApp(App);


app.use(PrimeVue);
app.use(router);
app.mount('#app')



app.component('InputText', InputText);
