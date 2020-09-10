import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

//@ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
