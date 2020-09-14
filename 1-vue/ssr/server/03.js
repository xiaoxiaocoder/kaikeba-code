const path = require('path')
const fs = require('fs')
const server = require('express')()
const serverRenderer = require('vue-server-renderer')
const createApp = require('./app')

const resolve = dir => path.resolve(__dirname, dir)

const renderer = serverRenderer.createRenderer({
  template: fs.readFileSync(resolve('./index.template.html'), 'utf-8')
})


server.get('*', (req, res) => {
  const context = { url: req.url }
  if(req.url === '/favicon.ico') {
    return res.end('')
  }
  const app = createApp(context)

  renderer.renderToString(
    app, 
    // 渲染上下文对象
    {
      title: 'App',
      meta: `
        <meta name="keyword" content="vue, ssr, vue-ssr">
        <meta name="description" content="vue ssr">
      `
    }
  )
    .then(html => {
      res.send(html)
    })
    .catch(err => res.status(500).send(err))
})

server.listen(8080, () => {
  console.log('http://localhost:8080')
})