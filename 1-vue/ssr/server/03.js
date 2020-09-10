const path = require('path')
const createApp = require('../src/app.cjs')
const server = require('express')()

const resolve = dir => path.resolve(__dirname, dir)

const renderer = 
  require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(resolve('../src/index.template.html'), 'utf-8')
  })


server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)
  
  renderer.renderToString(
    app, 
    // 渲染上下文对象
    {
      title: 'hello',
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