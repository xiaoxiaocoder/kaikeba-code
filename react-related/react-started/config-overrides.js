const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addBabelPlugins
} = require('customize-cra');
const ExportDefaultFromPlugin = require('@babel/plugin-proposal-export-default-from')

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
    ExportDefaultFromPlugin
  ])
)