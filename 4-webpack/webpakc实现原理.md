# 实现原理

webpack -> config -> 打包入口 输出目录 -> 入口文件 -> 分析是否有依赖， 以及依赖模块的路径 -> 解析处理内容（es6 -> es5）-> chunk code(缺失函数，require exports

```js
(Function() {
  // 缺失函数补齐
  require
    eval(chunkcode)
  exports
})({
  // 依赖模块， 入口模块的路径为key
  key： 模块处理后的chunkcode
})

```

## simple-webpack

图1: 自定义webpack，实现模块依赖及内容解析

![](./code/docs/img/webpack-parser.png)

图2: 根据生成的依赖及解析后的源码生成打包文件

![](./code/docs/img/webpack-genFile.png)

借助的babel工具库
@babel/parser 将源码解析为ast
@babel/traverse 分析代码依赖
@babel/core @babel/preset-env 源码转换（es6+ -> es 5）


- webpack.config.js
  - entry
  - output
  - mode

- Lib
  - webpack.js
    - webpack class
    - Run()
      - 入口文件的路径
      - 分析文件的内容
        - 模块依赖路径
        - 内容处理
        - chunkcode
      - 递归处理所有依赖
      - 生成bundle结构， 生成文件， 放入dist目录
- Bundle
  - 引入lib/webpack.js
  - 引入webpack options
  - compiler  = Webpack(options)
  - compiler.run()
  - node bundle.js


## 工具库

- @babel/parser
  - parse
- @babel/traverse 
  - https://babeljs.io/docs/en/babel-traverse
- @babel/core
  - https://babeljs.io/docs/en/babel-core
  - https://babeljs.io/docs/en/babel-core#transformfromast  代码转换（桥梁， 建立源码和转换工具的桥梁）
- @babel/preset-env
  - https://babeljs.io/docs/en/babel-preset-env  真正转换使用的工具


