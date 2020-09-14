const Vue = require('vue');
const path = require('path')
const server = require('express')()
const Router = require('vue-router')

Vue.use(Router)

const resolve = dir => path.resolve(__dirname, dir)

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(resolve('../src/index.template.html'), 'utf-8')
})


server.get('*', (req, res) => {
  if(req.url === '/favicon.ico') return res.end()

  const router = new Router({
    routes: [
      { path: '/', component: {template: '<div>Index Page</div>'} },
      { path: '/detail', component: {template: '<div>Detail Page</div>'} }
    ]
  })
  const app = new Vue({
    router,
    data: {
      url: req.url || '/'
    },
    template: `<div>
      <h2>访问的URL是: {{url}}</h2>
      <router-link to="/">Index</router-link>
      <router-link to="/detail">Detail</router-link>
      <router-view />
    </div>`
  })
  router.push(req.url)
  renderer.renderToString(
    app, 
    // 渲染上下文对象
    {
      title: '<i>02</i>',
      meta: `
        <meta name="keyword" content="vue, ssr, vue-ssr">
        <meta name="description" content="vue ssr">
      `
    }
  )
    .then(html => res.send(html))
    .catch(err => res.status(500).send(err.message))
})

server.listen(8080, () => {

  console.log('http://localhost:8080')
})