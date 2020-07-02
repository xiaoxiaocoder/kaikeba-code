import Vue from 'vue'

const files = require.context(__dirname, true, /\.js$/)
files.keys().forEach(key => {
  if (key === './index.js') return
  const component = files(key).default
  Vue.component(component.name, component)
})


// import { successNotice, errorNotice } from './KNotice'
// Vue.prototype.$success = successNotice
// Vue.prototype.$error = errorNotice