// 分析入口模块
// 内容 依赖模块 （目的时模块的路径）
// 内容 借助babel 处理代码 生成 代码片段
// const { str } = require('./a');
import { str } from './a.js';
import { b } from './b.js';

console.log(`${ b} Hello ${str}`)
