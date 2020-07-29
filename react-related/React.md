## TODO

1. 表单resetFieldsValue方法实现
2. 在使用getFieldDecorator时, 使用两次(username, password), 控制台打印, 调用了8次
3. 了解forceUpdate API
4. onClick={} 花括号中配置 `this.xxx` || `()  => this.xxx`

## Fixed

1. 执行引入my-rc-form, Form组件初始化了两次
   
   **原因: App.js中使用了`<React.StrictMode> <App /> </React.StrictMode>`**

   分析: [onstructor 会执行两次？- 浅淡 React StrictMode](https://juejin.im/post/5e64d3eff265da57671bd080)

2. 使用React.cloneElement 复制表单标签设置value值时使用了`value: getFieldValue(name)`或者在页面直接使用input标签如下: `<input placeholder="username" />` 
   
   控制台会有警告如下:![](./docs/imgs/warning-uncontrolled-input.png)
  解决办法: [设置初始值](https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro)
  `value: getFieldValue(name) || ''` 或者 `<input value='' placeholder="username" />`


## 知识点

### fuction 表单页面
- useRef, useEffect 自定义Hook useForm

### class 表单页面
- React.createRef / React.forwardRef / React.useImperativeHandle

### dialog
- createProtalAPI

