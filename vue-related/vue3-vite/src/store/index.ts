import { state } from './state';
import { createStore } from 'vuex';

// https://www.npmjs.com/package/vuex/v/4.0.0-beta.4

export default createStore({
  state,
  mutations: {
    change(state, payload) {
      state.title = payload
    }
  }
})