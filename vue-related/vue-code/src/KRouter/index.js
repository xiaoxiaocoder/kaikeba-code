let KVue
class KRouter {
  constructor(options) {
    this.$options = options

    // 缓存path和route映射关系
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })

    // this.current = '/about'
    KVue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }
  

  onHashChange() {
    this.current = window.location.hash.slice(1)
    // console.log(this.current)
  }
}

KRouter.install = function(Vue) {
  KVue = Vue
  // 1. 挂载$router
  Vue.mixin({
    beforeCreate() {
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    },
  })

  
  // 2. 声明两个全局组件 router-view, router-link
  Vue.component('router-view', {
    render(h) {
      // const routes = this.$router.$options.routes
      // const current = this.$router.current
      // const route = routes.find(route => route.path === current)
      const { routeMap, current } = this.$router
      const route = routeMap[current]
      const component = route.component ? route.component: 'div'
      return h(component.default)
    }
  })

  /**
   * 定义router-link
   */
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      }
    },
    render(h) {
      return h('a', { attrs: { href: '#' + this.to }}, this.$slots.default)
    },
  })
}

export default KRouter