const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.png|jpe?g|gif$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     // outputPath: '/static/imgs',
          //     // file-loader chunkhash 不可用
          //     name: '/static/imgs/[name]-[hash:8].[ext]'
          //   }
          // }
          {
            loader: 'url-loader',
            options: {
              // outputPath: '/static/imgs',
              // useRelativePath: true,
              name: '[name]-[hash:8].[ext]',
              // 建议设置为2kb， 小于2kb， 转为base64， 否则原样输出
              limit: 1024 * 2 // 30kb, 
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          miniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      filename: "index.html"
    }),
    new miniCssExtractPlugin({
      filename: 'static/css/[name]-[contenthash:8].css'
    })
  ]
}