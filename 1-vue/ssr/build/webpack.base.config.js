const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // devtool: isProd ? false : '#cheap-module-source-map',
  devtool: 'source-map',
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   // publicPath: '/dist/',
  //   filename: '[name].[chunkhash].js'
  // },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compileOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.styl(us)?$/,
        use: isProd 
              ? ExtractTextPlugin.extract({
                use: [
                  {
                    loader: 'css-loader',
                    options: { minimize: true }
                  }
                ],
                fallback: 'vue-style-loader'
              })
              : ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
    ]
  },
  performance: {
    hints: false
  },
  plugins: isProd
            ? [
              new VueLoaderPlugin(),
              // new webpack.optimize.UglifyJsPlugin({
              //   compress: { warning: false }
              // }),
              new webpack.optimize.ModuleConcatenationPlugin(),
              new ExtractTextPlugin({
                filename: 'common.[chunkhash].css'
              })
            ]
            : [
              new VueLoaderPlugin(),
              new FriendlyErrorsPlugin()
            ]
            ,
  optimization: {
    minimize: false
    // minimizer: {
    //   compress: { warning: false }
    // }
  }
}