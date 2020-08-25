module.exports = class {
  constructor() {
    /**
     * 创建形如: 格式的路由栈
     *  {
     *  get: {
     *    '/': handler 
     *  }
     * }
     */
    this.stack = Object.create(null)
  }

  register(type, path, handler) {
    if (!this.stack[type]) {
      this.stack[type ]= Object.create(null)
    }
    (this.stack[type][path] || (this.stack[type][path] = [])).push(handler)
  }

  get(path, handler) {
    this.register('get', path, handler)
  }

  post(path, handler) {
    this.register('post', path, handler)
  }

  routes(){
    const stack = this.stack
    return async function (ctx, next) {
      const { url, method } = ctx
      if (stack[method]) {
        const handlers = stack[method][url]
        if(handlers && handlers.length) {
          handlers.forEach(async handler => {
            await handler(ctx)
          })
          return
        }
      }
      await next()
    }
  }
}