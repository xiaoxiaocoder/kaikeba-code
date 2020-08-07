// 运行时配置文件, 可以在这里拓展运行时的能力, 比如修改路由, 修改render方法等.
// https://umijs.org/zh-CN/docs/runtime-config
import React from 'react'
import merge from 'merge';
import { history } from 'umi'
/**
 * 配置项
 *
 * modifyClientRederOpts(fn)
 * 修改clientRender参数.
 *
 */

let isSubApp = false;
export function modifyClientRenderOpts(memo: any) {
  console.log('app.ts modifyClientRenderOpts', memo);
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root': memo.rootElement
  }
}

// 修改路由
export function patchRoutes({ routes }){
  routes.unshift({
    path: '/foo',
    title: 'foo',
    exact: true,
    component: require('@/components/foo').default
  })
}

// 结合render, 请求服务端根据响应动态更新路由
// let extraRoutes

// export function patchRoutes({routes}) {
//   merge(routes, extraRoutes)
// }

// export function render() {
//   fetch('/api/routes').then(res => extraRoutes = res.routes)
// }


// render(oldRender: Function)  覆写render
// 可用于渲染之前做权限校验

// export function render(oldRender) {
//   fetch('/api/auth').then(auth => {
//     if(auth.isLogin) { oldRender }
//     else { history.push('/login') }
//   })
// }

// onRouteChange({routes, matchedRoutes, location, action})
// 在初始加载和路由切换时做一些事情.
export function onRouteChange({location, routes, action, matchedRoutes}) {
  // 比如用于埋点统计
  // bacon(location.pathname)
  console.log('onRouteChange location', location)
  console.log('onRouteChange action', action)
  console.log('onRouteChange routes', routes)
  // 设置标题
  if(matchedRoutes.length) {
    // console.log(matchedRoutes);
    // console.log(matchedRoutes[matchedRoutes.length - 1].route.title);
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '--';
  }
}

const ThemeProvider = React.createContext()
// rootContainer(lastRootContainer, args)
/**
 * args 包含:
 *  routes  全量路由配置
 *  plugin  运行时插件机制
 *  history history实例
 */
// 修改交给react-dom渲染时的根组件
// export function rootContainer(container, args) {
//   console.log('args', args);
//   // return React.createElement(ThemeProvider, null, container)
// }
