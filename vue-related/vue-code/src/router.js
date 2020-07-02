import Vue from "vue";
import KRouter from "./KRouter";

Vue.use(KRouter);
export default new KRouter({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: () => require('@/App'),
  //     children: [
  //       {
  //         path: '/about',
  //         name: 'aboutView',
  //         component: () => require('@/views/AboutView')
  //       },
  //       {
  //         path: '/form',
  //         name: 'formView',
  //         component: () => require('@/views/KFormView')
  //       }
  //     ]
  routes: [
    {
      path: "/about",
      name: "aboutView",
      component: () => require("@/views/AboutView"),
    },
    {
      path: "/form",
      name: "formView",
      component: () => require("@/views/KFormView"),
    },
  ],
});
