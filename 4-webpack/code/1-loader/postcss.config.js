const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      // 覆盖package.json中的browsersList 配置
      overrideBrowserslist: ['last 2 versions', '> 1%']
    })
  ],
}