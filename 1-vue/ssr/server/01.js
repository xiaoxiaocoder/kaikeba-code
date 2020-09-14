const Vue = require('vue');
const server = require('express')()

const renderer = require('vue-server-renderer').createRenderer()


server.get('*', (req, res) => {

if(req.url === '/favicon.ico') return res.end()

const app = new Vue({
    data: {
      url: req.url || '/'
    },
    template: `<div>访问的URL是: {{url}}</div>`
  })

  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.status = 500
    res.send(err.message)
  })
})

server.listen(8080,() => {
  console.log(`http://localhost:8080`)
})