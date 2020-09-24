const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fileListWebpackPlugin = require('./plugins/file-list-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.template.html'),
      filename: 'index.html'
    }),
    new fileListWebpackPlugin({name: 'test'})
  ]
}