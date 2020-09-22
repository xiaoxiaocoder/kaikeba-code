const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const glob = require("glob");
// 暗号：等价交换，炼金术不变的原则
const { entry, htmlPlugins } = (() => {
  const entryFiles = glob.sync(path.resolve(__dirname, "pages/*/index.js"));
  const entry = Object.create(null);
  const htmlPlugins = [];
  entryFiles.forEach((item, index) => {
    const match = item.match(/pages\/(.+)\/index.js/);
    if (match) {
      const folderName = match[1];
      // 入口文件chunk配置
      entry[folderName] = item;
      const dirname = path.dirname(item);
      // 多页面htmlWebpckPlugin配置
      htmlPlugins.push(
        new htmlWebpackPlugin({
          template: `${dirname}/index.html`,
          filename: `${folderName}.html`,
          chunks: [folderName],
        })
      );
    }
  });
  return {
    entry,
    htmlPlugins,
  };
})();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:8].js",
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
            loader: "url-loader",
            options: {
              // outputPath: '/static/imgs',
              // useRelativePath: true,
              name: "[name]-[hash:8].[ext]",
              // 建议设置为2kb， 小于2kb， 转为base64， 否则原样输出
              limit: 1024 * 2, // 30kb,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          miniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "static/css/[name]-[contenthash:8].css",
    }),
    ...htmlPlugins,
  ],
};
