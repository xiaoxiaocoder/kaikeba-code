# Node


## 创建命令行工具CLI

可分为三个步骤

1.  package.json中添加`bin`字段, 值为对象
2.  入口文件, 顶部 `#!/bin/usr/env node`
3.  当前目录下, 执行`npm link`

例子:

```json
"bin": {
  "hi": "./bin/hello.js"
}
```

bin/hello.js
```js
#!/usr/bin/env node

console.log('Hello')
```

npm link

### 一些小技巧

1.  child_process spawn和主进程输入输出流合并  [pipe](http://nodejs.cn/api/stream.html#stream_readable_pipe_destination_options)

```js
const { spawn } = require('child_process')

spawn.stdout.pipe(process.stdout)
spawn.stderr.pipe(process.stderr)

```

### 常用库

- commander 接收命令行传参并转换成指定命令. **program.parse(process.argv)**
- inquirer  命令行交互界面
- figlet    命令行界面图形文字
- chalk     命令行界面输出 富文本文字
- ora       进度条


## Koa

解决了哪些问题, 原生http的不足

- 令人困惑的request和response
  - res.end 流?
  - res.writeHead
- 对描述复杂业务逻辑
  - 流程描述
  - 切面描述AOP
    - 语言级
    - 框架级


### 同步睡眠

```js
let expire = Date.now() + 102
while(Date.now() < expire)
```