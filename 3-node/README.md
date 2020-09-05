# Node

https://github.com/su37josephxia/kaikeba-code

## cli

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

### 常用库

- commander 接收命令行传参并转换成指定命令

```js
#!/bin/usr/env node

const program = require('cmmander')

// 接收命令行传参
program.parse(process.argv)
```

- inquirer  命令行交互界面
- figlet  环境界面图形文字
- chalk 命令行界面输出 富文本文字
- ora 进度条
- 