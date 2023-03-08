import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import './assets/tailwind.css'

new Vue({
    el: "#app",
    router: router,
    store,
    render: h => h(App),
})


