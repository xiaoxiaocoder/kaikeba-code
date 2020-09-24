
module.exports = class fileListWebpackPlugin {
  constructor(options) {
    console.log('options :>> ', options);
  }
  
  //暗号：做人嘛，最重要的是开心
  apply(compiler) {
    compiler.hooks.emit.tapAsync('fileListWebpackPlugin', (compilation, cb) => {
      const assets = compilation.assets;
      const output = []

      const assetKeys = Object.keys(assets)
      assetKeys.forEach(key => {
        const asset = assets[key]
        output.push(`FileName: ${key}\t\tFileSize: ${asset.size()}`)
      })

      assets['compile-file-list'] = {
        source () {
          return `File Count: ${assetKeys.length}\n${output.join('\n')}`
        },
        size() {
          return 1
        }
      }
      cb()
    })
  }
}

