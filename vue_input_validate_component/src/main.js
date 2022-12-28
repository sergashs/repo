import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

//components
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import MultiSelect from 'primevue/multiselect';



import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);


app.use(PrimeVue);
app.use(router);
app.mount('#app')


app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Divider', Divider);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('MultiSelect', MultiSelect);