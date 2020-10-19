const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.less', '.js']
  },
  // resolveLoader: []
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    // clean-webpack-plugin: options.output.path not defined. Plugin disabled...
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: '[contenthash:8].css'
    }),
    // BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
    // ....
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/template.html'),
      filename: 'index.html'
    })
  ]
}