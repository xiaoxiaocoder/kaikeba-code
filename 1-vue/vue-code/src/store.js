import Vue from 'vue';
import Vuex from './KVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      state.count += 1;
    }
  },
  actions: {
    add({commit}) {
      setTimeout(() => {
        commit('add'); 
      }, 1000);
    }
  },
  getters: {
    doubleCount: state => {
      return state.count * 2;
    }
  }
})