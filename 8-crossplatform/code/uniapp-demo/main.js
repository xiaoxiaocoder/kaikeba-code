import Vue from 'vue'
import App from './App'
import pageHead from './components/page-head.vue'

Vue.component('page-head', pageHead);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
