# Output

## 配置项

- library
- libraryTarget
- globalObject: 
  - https://webpack.js.org/configuration/output/#outputglobalobject
  - When targeting a library, especially when libraryTarget is 'umd', this option indicates what global object will be used to mount the library. To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'. Defaults to self for Web-like targets.
- libraryExport:
  - https://www.webpackjs.com/configuration/output/#output-libraryexport
  - Configure which module or modules will be exposed via the libraryTarget. The default _entry_return_ value is the namespace or default module returned by your entry file. The examples below demonstrate the effect of this config when using libraryTarget: "var", but any target may be used.

## 创建 library

https://www.webpackjs.com/guides/author-libraries/

注意，我们还可以通过以下配置方式，将 library 暴露：

global 对象中的属性，用于 Node.js。
this 对象中的属性。
完整的 library 配置和相关代码请参阅 webpack library 示例。

### 基本配置

现在，让我们以某种方式打包这个 library，能够实现以下几个目标：

- 不打包 lodash，而是使用 externals 来 require 用户加载好的 lodash。
- 设置 library 的名称为 webpack-numbers.
- 将 library 暴露为一个名为 webpackNumbers 的变量。
- 能够访问其他 Node.js 中的 library。

## Q&A

### libary 和 libaryTarget

https://blog.csdn.net/Frank_YLL/article/details/78992778

一句话总结: library 对外暴露的名称, libraryTarget: 如何使用(window[libraryName], this[libraryName] 或者其他)

主要在开发类库时使用
output.library
支持输入 string 或者 object(从 webpack 3.1.0 版本开始支持; 限于 libraryTarget: “umd” 时使用)类型的值。

output.library 的值被如何使用会根据 output.libraryTarget 的取值不同而不同。而默认 output.libraryTarget 的取值是 var，如果如下配置：

```js
output: {
  library: "myDemo";
}
```

output.libraryTarget
支持输入 string 类型的值。默认值：var

此配置的作用是控制 webpack 打包的内容是如何暴露的。请注意这个选项需要和 output.library 所绑定的值一起产生作用。在以下的 demo 中，假设 output.library 值是 myDemo。*entry_return*表示入口点返回的值。在 bundle 中，它是 webpack 从入口点生成的函数的输出。
