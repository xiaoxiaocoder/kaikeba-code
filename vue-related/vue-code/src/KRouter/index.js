let KVue
class KRouter {
  constructor(options) {
    this.$options = options

    // 缓存path和route映射关系
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })

    // KVue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')
    this.current = window.location.hash.slice(1) || '/'
    KVue.util.defineReactive(this, 'matched', [])
    this.matchRoutes()

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }
  
  matchRoutes (routes) {
    routes = routes || this.$options.routes
    
    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
      }
      //  this.current /about/info  父路由 /path
      if(this.current !== '/' && this.current.startsWith(route.path)) {
        this.matched.push(route)

        if(route.children) {
          this.matchRoutes(route.children)
        }
        return
      }
    }
  }
  onHashChange() {
    this.current = window.location.hash.slice(1)
    this.matched = []
    this.matchRoutes();
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
    functional: true,
    render(h, { data, parent, children }) {
      // const routes = this.$router.$options.routes
      // const current = this.$router.current
      // const route = routes.find(route => route.path === current)
      // const { routeMap, current } = this.$router
      // const { routeMap, current } = parent.$router
      // const route = routeMap[current]

      const { matched } = parent.$router
      data.routerView = true;
      let depth = 0;
      while(parent) {
        const vnodeData = parent.$vnode && parent.$vnode.data
        // 当前parent是一个router-view
        if(vnodeData && vnodeData.routerView) {
          depth++;
        }

        parent = parent.$parentl
      }
      const route = matched[depth]
      const component = route ? route.component: null
      return h(component, data, children)
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