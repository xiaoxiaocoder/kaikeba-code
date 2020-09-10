import { defineConfig } from 'umi';

export default defineConfig({
  // docs/config
  base: '/docs/',
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {
    // htmlSuffix?: boolean;
    // dynamicRoot?: boolean;
    // /**
    //  * extra render paths only enable in ssr
    //  */
    // extraRoutePaths?: () => any;
  },
  // routes: [
  //   {
  //     path: '/',
  //     title: 'home',
  //     component: '@/layouts/index',
  //     // 配置路由的告诫组件封装
  //     wrappers: [
  //       '@/wrappers/auth'
  //     ],
  //     // redirect: '/list',
  //     routes: [
  //       { path: '/list', title: 'list', component: 'list' },
  //       { path: '/admin', title: 'admin', component: 'admin' }
  //     ]
  //   }
  //   ,
  // ],
  layout: {}
});
