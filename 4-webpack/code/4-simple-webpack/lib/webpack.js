const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');
const presetEnv = require('@babel/preset-env');

module.exports = class webpack {
  constructor(options) {
    const { entry, output } = options
    this.entry = entry
    this.output = output
    this.modules = []
  }

  run() {
    // 解析 AST
    const parseReuslt = this.parse(this.entry)
    // 递归处理所有依赖
    this.modules.push(parseReuslt)
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const { dependencies } = item
      if (dependencies && Object.keys(dependencies).length) {
        for (const key in dependencies) {
          const element = dependencies[key];
          this.modules.push(this.parse(element))
        }
      }
    }

    const output = Object.create(null)
    this.modules.forEach(item => {
      output[item.entryFile] = item
    })

    // 生成文件
    this.genFile(output)
  }
  // 暗号：有点感动了怎么办？
  parse(entryPath) {
    const content = fs.readFileSync(entryPath, 'utf-8')
    // https://babeljs.io/docs/en/babel-parser/#babelparserparsecode-options
    const ast = parser.parse(content, {
      // 按照模块化方式解析
      sourceType: 'module'
    })

    const dependencies = {}
    traverse(ast, {
      // 提取代码中的 函数引入
      ImportDeclaration (travePath) {
        const dirname = path.dirname(entryPath)
        const { node } = travePath
        // node.source.value .a .b 实际解析过程中， 
        // TODO: 需要添加后缀名， 根据路径和支持的后缀(resolve.extensions) 遍历支持的文件， 添加后缀
        const relativePath = node.source.value
        const fullPath = path.join(dirname, relativePath)
        dependencies[relativePath] = fullPath
      }
    })
    // https://babeljs.io/docs/en/babel-core#transformfromast
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    })
    return {
      entryFile: entryPath,
      dependencies,
      code
    }
  }

  // 暗号：有点感动了怎么办？
  genFile(code) {
    const {path: baseDir, filename} = this.output
    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir)
    }
    const distPath = path.join(baseDir, filename)
    // 生成bundle
    const bundle =`(function(modules){
      function require(module) {

        function _require(relativePath) {
          return require(modules[module].dependencies[relativePath])
        }

        // console.log(module,  modules[module].code)
        var exports = {};
        (function(require, exports, code){
          eval(code)
        })(_require, exports, modules[module].code)
        return exports;
      }

      require('${this.entry}')
    })(${JSON.stringify(code, null, 2)})`

    fs.writeFileSync(distPath, bundle, 'utf-8')
  }
}