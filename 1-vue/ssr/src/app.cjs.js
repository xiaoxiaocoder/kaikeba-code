// 通用entry(unversal entry)
const Vue = require('vue')

module.exports = function createApp(context) {
  return new Promise((resolve, reject) => {
    const app = new Vue({
        data: {
          url: context.url
        },
        template: '<div>createApp Async.. 访问的url是: {{url}}</div>'
    })
  
      resolve(app)
  })
}