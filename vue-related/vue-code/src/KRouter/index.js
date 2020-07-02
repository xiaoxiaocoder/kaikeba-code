let KVue
class KRouter {
  constructor(options) {
    this.$options = options

    this.current = '/about'
    // KVue.util.defineReactive()
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

  }
  

  onHashChange() {
    this.current = window.location.hash.slice(1)
    console.log(this.current, window.location.hash.slice(1))
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
      const routes = this.$router.$options.routes
      const current = this.$router.current
      console.log(routes, current)
      const route = routes.find(route => route.path === current)
      // console.log(route)
      const component = route.component ? route.component: 'div'
      return h(component)
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