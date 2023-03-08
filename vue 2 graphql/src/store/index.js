import Vue from 'vue'
import Vuex from 'vuex'
import DarkMode from './module/DarkMode'


Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    DarkMode
  }
});


export default store

