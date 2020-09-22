# webpack

## 几个知识点

### module, chunk, chunks, bundle

https://juejin.im/post/6844903935795265549

![](./code/docs/img/module-chunk.png)

如上图：

1.  对于一份同逻辑的代码，当我们手写下一个一个的文件，它们无论是 ESM 还是 commonJS 或是 AMD，他们都是 module ；
2.  当我们写的 module 源文件传到 webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作；
3.  webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。


一般来说一个 chunk 对应一个 bundle，比如上图中的 utils.js -> chunks 1 -> utils.bundle.js；但也有例外，比如说上图中，我就用 MiniCssExtractPlugin 从 chunks 0 中抽离出了 index.bundle.css 文件。

**一句话总结**

> module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字： <br/>
我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。


### hash, chunkhash, contenthash

- hash 代码发生变化时，hash改变(整个项目只要有文件变化，hash变化)
- chunkhash 编译输出时的入口文件发生改变的hash(具体入口文件修改)
= contenthash 导出css内容发生改变

## Loaders

### 自定义loader

### css 相关

#### less

https://www.webpackjs.com/loaders/less-loader/

- less 
- [less-loader](https://www.webpackjs.com/loaders/less-loader/#%E7%A4%BA%E4%BE%8B) Use the css-loader or the raw-loader to turn it into a JS module and the ExtractTextPlugin to extract it into a separate file.

#### css-loader
https://www.webpackjs.com/loaders/css-loader/

- [css-loader](https://www.webpackjs.com/loaders/css-loader/#%E7%94%A8%E6%B3%95)  css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们

#### style-loader
https://www.webpackjs.com/loaders/style-loader/

Adds CSS to the DOM by injecting a <style> tag

#### postcss-loader
https://www.webpackjs.com/loaders/postcss-loader/

Loader for webpack to process CSS with PostCSS

执行要在css-loader之前（即配置在css-loader之后（默认执行顺序））
```sh
yarn add postcss postcss-loader -D

yarn add autoprefixer -D // postcss插件
```

#### 插件相关

##### mini-css-extract-plugin


### 插件相关

#### html-webpack-plugin

多页面配置
chunks

#### clean-webpack-plugin


## 其他工具

- [glob](https://www.npmjs.com/package/glob)
Match files using the patterns the shell uses, like stars and stuff.

