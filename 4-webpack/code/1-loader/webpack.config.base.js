const path = require("path");
const  miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  /**
   * entry值类型： 字符串， 数组， 对象或方法(方法返回值为字符串，数组，对象中的一个)
   *    如果传入一个字符串或字符串数组，chunk 会被命名为 main
   *    如果传入一个对象，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。
   */
  //========== 字符串类型
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js' // 默认main.js
  },

  // entry: ['./src/a.js','./src/b.js'],
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'index.js'
  // }

  // entry: {
  //   index: "./src/index.js",
  //   login: "./src/login.js",
  //   a: "./src/a.js",
  // },
  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  //   // filename: '[name]-bundle-[hash:6].js'
  //   filename: '[name]-bundle-[chunkhash:6].js'
  // },
  resolve: {
    // 自动解析确定的扩展。默认值为：extensions: [".js", ".json"]
    // 使用此选项，会覆盖默认数组 https://www.webpackjs.com/configuration/resolve/#resolve-extensions
    extensions: [".js", ".json", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // use: [
        //   // "style-loader", // 将解析好的css 插入到html页面中
        //   miniCssExtractPlugin.loader, // 使用minicssExtractPlugin 代替 style-loader 
        //   "css-loader",
        //   'postcss-loader', // 要在css-loader之前执行
        //   "less-loader"
        // ],
        use: [
          "kkb-style-loader", // 将解析好的css 插入到html页面中
          // miniCssExtractPlugin.loader, // 使用minicssExtractPlugin 代替 style-loader 
          "kkb-css-loader",
          "kkb-less-loader"
        ],
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     // path.resolve(__dirname, './loaders/replace-loader'),
      //     'replace-loader',
      //     {
      //       // loader: path.resolve(__dirname, './loaders/replace-loader-async'),
      //       // 使用resolveLoader 简化引用
      //       loader: 'replace-loader-async',
      //       options: {
      //         name: 'async loader'
      //       }
      //     }
      //   ]
      // }
    ],
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 单页面应用配置
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    // 多页面应用配置
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, './public/index.html'),
    //   filename: 'index.html',
    //   chunks: ['index'] // 对应entry中的index
    // }),
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, './public/index.html'),
    //   filename: 'login.html',
    //   chunks: ['login'] // 对应entry中的login
    // }),
    // 抽离css， 并给css 输出文件命名
    new miniCssExtractPlugin({
      filename: 'css/index-[contenthash:6].css' 
    }),

  ]
};
