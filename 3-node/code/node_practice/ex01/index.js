const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
// 暗号: 递归
    const files = fs.readdirSync(path);
    let routeConfig = `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [`;

    files.forEach(file => {
    const filename = file.replace('.vue', '').toLowerCase()
    routeConfig += `
{
    path: '/${filename}',
    name: '${filename}',
    component: () => import('./views/${file}')
},`
    })

routeConfig += `\n\n    ]
})`
    return routeConfig
}