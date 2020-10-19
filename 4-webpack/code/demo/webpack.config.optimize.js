const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index',
    a: './src/a.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/template.html'),
      filename: 'index.html'
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/a.html'),
      filename: 'a.html',
      // chunks 自动加载的输出entry, 默认输出所有的entry到 html页面中
      chunks: ['a']
    }),
  ],
  optimization: {
    // cacheGroups是splitChunks配置的核心，对代码的拆分规则全在cacheGroups缓存组里配置。
    splitChunks: {
      // minSize设置的是生成文件的最小大小，单位是字节。
      // 如果一个模块符合之前所说的拆分规则，但是如果提取出来最后生成文件大小比minSize要小，
      // 那它仍然不会被提取出来。这个属性可以在每个缓存组属性中设置，也可以在splitChunks属性中设置，这样在每个缓存组都会继承这个配置。这里由于我的demo中文件非常小，为了演示效果，我把minSize设置为30字节，好让公共模块可以被提取出来，正常项目中不用设这么小。
      minSize: 30,  
      cacheGroups: {
        default: {
          name: 'common',
          // chunks：指定哪些类型的chunk参与拆分，值可以是string可以是函数。如果是string，
          // 可以是这个三个值之一：all, async, initial，
          // all 代表所有模块，async代表只管异步加载的, initial代表初始化时就能获取的模块。
          // 如果是函数，则可以根据chunk参数的name等属性进行更细致的筛选。
          
          // splitChunks默认任何模块都会被提取。
          chunks: 'initial',
          //模块被引用2次以上的才抽离
          minChunks: 2,
          // priority属性的值为数字，可以为负数。
          //作用是当缓存组中设置有多个拆分规则，而某个模块同时符合好几个规则的时候，
          // 则需要通过优先级属性priority来决定使用哪个拆分规则。
          priority: -20,
          // maxInitialRequests是splitChunks里面比较难以理解的点之一，它表示允许入口并行加载的最大请求数，
          // 之所以有这个配置也是为了对拆分数量进行限制，不至于拆分出太多模块导致请求数量过多而得不偿失。
          // https://www.cnblogs.com/kwzm/p/10316217.html
          // maxInitialRequests: 10

        },
        vender: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vender',
          chunks: 'initial',
          priority: -10
        },
        util: {
          test: /src\/util\.js$/,
          name: 'locallib',
          chunks: 'initial',
          priority: -5
        }
      }
    }
  }
}