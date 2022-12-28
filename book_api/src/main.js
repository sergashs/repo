import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

//components
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '@/assets/scss/style.scss'

const app = createApp(App);


app.use(PrimeVue);
app.use(router);
app.mount('#app')



app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
