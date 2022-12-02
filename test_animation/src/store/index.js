import Vue from 'vue'
import Vuex from 'vuex'
import Animations from './module/Animations'


Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    Animations
  }
});


export default store

