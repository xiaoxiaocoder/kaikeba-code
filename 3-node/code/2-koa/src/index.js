const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class Koa {

  constructor() {
    this.middlewares = []
  }
  
  use(callback) {
    // this.callback = callback
    this.middlewares.push(callback)
  }


  listen(...args) {
    // 创建server
    const server = http.createServer(async (req, res) => {
      // 创建上下文
      let ctx = this.createContext(req, res)
      // this.callback(ctx)
      
      // 合成方法
      const fn = compose(this.middlewares)
      await fn(ctx)

      // 输出响应内容
      res.end(ctx.body)
    })

    server.listen(...args)
  }



  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request  = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx;
  }
}

function compose(middlewares) {
  return function(ctx) {
    return dispatch(0);

    function dispatch(i) {
      let fn = middlewares[i]
      if(!fn) {
        return Promise.resolve()
      }

      return Promise.resolve(
        fn(ctx, function next() {
          return dispatch(i+1)
        })
      )
    }
  }
}

// function compose(middlewares) {    return function(ctx) { 
//   // 传入上下文      
//   return dispatch(0);      function dispatch(i) {        let fn = middlewares[i];        if (!fn) {          return Promise.resolve();        }        return Promise.resolve(          fn(ctx, function next() {// 将上下文传入中间件，mid(ctx,next)            return dispatch(i + 1);          })        );      }    };开课吧web全栈架构师


module.exports = Koa