const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers-lib.js",
    library: "webpackNumbers",
    libraryTarget: "umd",
    // libraryExport: "default",
    // globalObject: "this",
  },
  externals: {
    lodash: {
      // 当引入方式为commonjs时, 以名称为lodash的包方式引用
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
