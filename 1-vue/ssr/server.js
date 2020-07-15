const path = require('path');
const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = dir => path.resolve(__dirname, dir)
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})
const isProd = process.env.NODE_ENV === 'production'

const app = express()


// 第 1 步：开放dist/client目录，关闭默认下载index页的选项，不然到不了后面路由
app.use(express.static(resolve('./dist/client'), {index: false}))
app.use(express.static(resolve('./public')))


const clientManifest = require(resolve('./dist/client/vue-ssr-client-manifest.json'));

const serverBundle = require(resolve('./dist/server/vue-ssr-server-bundle.json'))

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, 
  template: fs.readFileSync(resolve('./src/index.template.html'), 'utf-8'),
  clientManifest
})

app.get('*', async (req, res) => {
  const context = { url: req.url }

  try {
    const html = await renderer.renderToString(context)
    res.end(html)
  } catch (error) {
    res.status(500).end('server error' + error.message)
  }
})





app.listen(8080, () => {
  console.log('server listening at 8080. http://localhost:8080')
})