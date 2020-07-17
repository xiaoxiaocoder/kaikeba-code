import Vue from "vue";
import 'vue-router/types/index'
import 'vuex/types/index'
import { AxiosInstance } from "axios";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $http: AxiosInstance;
  }
}
// yar