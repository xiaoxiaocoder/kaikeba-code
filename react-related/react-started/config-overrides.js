const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addBabelPlugins
} = require('customize-cra');

module.exports = override(
  fixBabelImports("import", {
    // antd 按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "red"
    }
  }),
  addDecoratorsLegacy(), // 配置装饰器
  addBabelPlugins([
    "@babel/plugin-proposal-export-default-from"
  ])
)