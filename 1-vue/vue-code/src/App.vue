<template>
  <div id="app">
    <h2>HomePage</h2>
    <section style="display: flex; justify-content: space-around;">
      <section >
        <h3>View component</h3>
        <select v-model="currentView">
          <option v-for="view,index in viewList" :key="index" :value="view.name">{{ view.labelName }}</option>
        </select>
        <h4 v-show="currentView">CurrentView: {{ currentView }}</h4>
        <component :is="currentView"></component>
    </section>

    <section>
      <h3>Route Link & View</h3>
      <ul style="overflow: hidden;">
        <li v-for="route,index in routes"  :key="index" class="route-link">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
      <router-view />
    </section>
    </section>
  </div>
</template>

<script>
let viewComponents = {}
const views = require.context(__dirname + '/views', false, /.vue$/)
views.keys().forEach(view => {
  const viewComponent = views(view).default
  if(!viewComponent.name) {
    viewComponent.name = view.slice(2, -4)
  }
  viewComponent.labelName = viewComponent.name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  viewComponents[viewComponent.name] = viewComponent
})
export default {
  name: 'App',
  components: {
    ...viewComponents
  },
  data() {
    return {
      routes: [],
      currentView: 'KFormView'
    }
  },
  computed: {
    viewList() {
      return viewComponents;
    }
  },
  created () {
    this.routes = this.genRoutes();
    this.routes.unshift({path: '/', name: 'Home'})
  },
  methods: {
    genRoutes: function _genRoutes( routeConfig ) {
      let routes = routeConfig ? routeConfig : this.$router.$options.routes
      let routeLinks = []
      routes.forEach(route => {
        const { path, name } = route
        routeLinks = routeLinks.concat({
          path: path,
          name: name || path
        })
        if(route.children) {
          const childLinks = _genRoutes(route.children)
          routeLinks = routeLinks.concat(childLinks)
        }
      })
      return routeLinks
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.route-link {
  list-style: none;
  float: left;
  margin-right: 8px;;
}
</style>
