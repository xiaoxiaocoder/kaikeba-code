import Vue from "vue";
import KRouter from "./KRouter";

Vue.use(KRouter);
export default new KRouter({
  routes: [
    {
      path: "/about",
      name: "aboutView",
      component: () => import("@/views/AboutView"),
      children: [
        {
          path: "/about/info",
          component: {
            render(h) {
              return h("div", "about info component");
            },
          },
        },
      ],
    },
    {
      path: "/form",
      name: "formView",
      component: () => import("@/views/KFormView"),
    },
  ],
});
