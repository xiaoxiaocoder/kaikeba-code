// const Koa = require('koa');
const Koa = require('./src/index');
const Router = require('./src/router')
const app = new Koa()

const router = new Router()

router.get('/', ctx => (ctx.body = 'index page'))
router.get('/list', ctx => (ctx.body = 'list page'))

// app.use(async (ctx, next) => {
//   const start = Date.now()
//   await next()
//   const end = Date.now()
//   console.log('end - start :>> ', end - start);
// })

// app.use(async (ctx, next) => {
//   let expire = Date.now() + 102
//   while(Date.now() < expire)
//   ctx.body = {
//     name: 'Tom'
//   }
// })

// app.use((req, res) => {
//   res.end('Hello')
// })
// app.use(ctx => {
//   ctx.body = 'hhha'
// })

app.use(router.routes());

app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '5'
})
app.use(async (ctx, next) => {
  ctx.body += '2'
  await next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '3'
})

app.listen(3000, () => {
  console.log('app listening at http://localhost:3000')
})