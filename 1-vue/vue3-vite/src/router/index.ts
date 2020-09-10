import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

// https://www.npmjs.com/package/vue-router/v/4.0.0-beta.3
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // component: import("../views/About.vue"),
    component: import("../views/About.tsx"),
    children: [
      {
        // 子路由path前不需要配置/ 
        path: 'info',
        name: 'Info',
        component: import('../views/Info.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router