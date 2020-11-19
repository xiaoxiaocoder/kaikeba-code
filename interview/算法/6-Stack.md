# 栈与队列

典型真题快速上手-“有效括号”问题
---

> 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

```js
const leftToRight = {
  '(': ')',
  '[': ']',
  '{': '}',
}
function isValidStr(str) {
  const stack = new Stack()
  const leftKeys = Object.keys(leftToRight)
  for(let i = 0, len = str.length; i < len; i++) {
    const char = str[i]
    if(leftKeys.includes(char)) {
      stack.push(leftToRight[char])
    } else {
      if(stack.length() && stack.top() !== char) {
        return false
      }
    }
  }
  return true
}
```
栈问题进阶-每日温度问题
---

> 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

```js
/*
在这个过程中, 进队每一个温度执行最多一次入栈操作, 一次出栈操作. 整个数组只会被遍历一次
因此时间复杂度是O(n). 如果是
*/
function dailyTemplatures = function (temps) {
  const len = temps.length
  const stack = new Stack();
  const res = new Array(len).fill(0)
  const temp = 0
  for(let i = 0; i < len; i++) {
    temp = temps[i]
    while(stack.length() && temp > temp[stack.top()]) {
      // 栈顶温度对应的索引
      const top = stack.pop()
      // top值为当前索引前面的元素, 两个温度索引差(i - top)即要求的天数
      res[i] = i - top
    }
    stack.push(i)
  }
}
```

栈的设计--"最小化"问题

> 题目描述: 设计一个支持push, pop, top操作, 并能在常数时间内检索到最小元素的栈.

pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。


MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.getMin(); --> 返回 -2.

