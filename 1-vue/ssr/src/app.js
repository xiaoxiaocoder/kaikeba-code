// 通用entry(unversal entry)
// import Vue from 'vue'
// import App from './App.vue'
// import { createRouter } from './router'
// import { createStore } from './store'

const Vue = require('vue');
const App = require('./App.vue');
const { createRouter } = require('./router');
const { createStore } = require('./store');

module.exports = function createApp(context) {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    context,
    render: h => h(App)
  })

  return { app, router, store }
}
