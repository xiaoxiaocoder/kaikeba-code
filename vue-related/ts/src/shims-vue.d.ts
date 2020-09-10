import Vue from "vue";
import 'vue-router/types/index'
import 'vuex/types/index'
import { AxiosInstance } from "axios";
import 'element-ui'

// declare module "*.vue" {
//   import Vue from 'vue';
//   export default Vue;
// }

declare module "vue/types/vue" {
  interface Vue {
    $http: AxiosInstance;
    $message: Function
  }
}
