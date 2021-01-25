# 栈与队列

## 栈

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

```js
class MiniStack {
  constructor() {
    this.stack = new Stack()
    this.stack2 = new Stack()
  }

  push(val) {
    this.stack.push(val)
    if(this.stack2.length() === 0 || val < this.stack2.top()) {
      this.stack2.push(val)
    }
  }

  top() {
    return this.stack.top()
  }

  pop() {
    let val = this.stack.pop()
    if(val === this.stack2.top()) {
      this.stack2.pop()
    }
  }

  minVal() {
    return this.stack2.top()
  }
}
```

## 队列

关于队列的三点:

1.  栈向队列的转化             ※※
2.  双端队列                  ※※※
3.  优先队列(本质是二叉堆结构)   ※※※※※※

### 算法面试中, 什么样的题目是好题目?

1.  考察的大多是算法/数据结构中最经典, 最关键的部分
2.  知识点要尽可能密集, 题目本身要尽可能具备综合性

**用栈实现队列**符合上述要求, 一方面, 它考察的数据结构中的经典内容; 另一方面, 它又覆盖了两个大的知识点, 足以检验处候选人编码基本功的扎实程度. 唯一的缺点可能就是深度和复杂度不够.


### 如何用栈实现一个队列

>使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。


示例:

MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false

说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。


```js 使用栈实现队列
class Queue {
  constructor() {
    // 先进后出
    this.stack = new Stack()
    // 将stack逆序存储, 调用时即为正常队列顺序
    this.cache = new Stack()
  }

  push(val) {
    this.stack.push(val)
  }

  reset() {
    // cache中为空时, 再将stack中逆序过来, 避免数据冲突
    if(this.cache.stack <=0) {
      while(this.stack.length()) {
        this.cache.push(this.stack.pop())
      }
    }
  }

  peek() {
    this.reset()
    return this.cache.top()
  }

  pop() {
    this.reset()
    return this.cache.pop()
  }

  empty() {
    return !this.stack.length() && !this.cache.length()
  }

  size() {
    return this.stack.length() + this.cache.length()
  }
}
```

### 双端队列

**双端队列就是允许在队列的两端进行插入和删除的队列**, 衍生出**滑动窗口问题**

体现在编码上, 最常见的载体是既允许pop, push同时又允许shift, unshift的数组.

```js
const queue = [1,2,3,4] // 定义一个双端队列   
queue.push(1) // 双端队列尾部入队 
queue.pop() // 双端队列尾部出队   
queue.shift() // 双端队列头部出队 
queue.unshift(1) // 双端队列头部入队
```

#### 滑动窗口问题

> 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
> 示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

解释: 滑动窗口的位置

[1 3 -1] -3 5 3 6 7
1 [3 -1 -3] 5 3 6 7
1 3 [-1 -3 5] 3 6 7
1 3 -1 [-3 5 3] 6 7
1 3 -1 -3 [5 3 6] 7
1 3 -1 -3 5 [3 6 7]

最大值分别对应：3 3 5 5 6 7

*提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。*

```js
function maxSlidingWindow(nums, k) {
  const res = []
  let left = 0
  let right = k-1

  while(right < nums.length) {
    const range = nums.slice(left, right+1)
    const max = Math.max.apply(null, range)
    res.push(max)
    left++
    right++
  }
  return res
}

/*
如果试图推入的元素（当前元素）大于队尾元素，则意味着队列的递减趋势被打破了。此时我们需要将队列尾部的元素依次出队（注意由于是双端队列，所以队尾出队是没有问题的）、直到队尾元素大于等于当前元素为止，此时再将当前元素入队。

如果试图推入的元素小于队列尾部的元素，那么就不需要额外的操作，直接把当前元素入队即可。
*/
function maxSlidingWindow2(nums, k) {
  // 存储递减序列下标索引
  const queue = []

  for(let i = 0; i < nums.length; i++) {
    // 递减序列, 当前数值小于队列最后一个元素是, 队尾出队
    while(queue.length && nums[queue[queue.length - 1]] < nums[i]){
      queue.pop()
    }
    // 添加当前数值到队列最后
    queue.push(i)

    // queue[0] 滑动窗口开始索引  i - K 滑动窗口允许的最小索引
    while(queue.length && queue[0] <= i - k) {
      // ?????????????
      queue.shift()
    }
    // 当大于k时, 每执行一次循环, queue中push了一个元素, 就需要将队列中的最大元素(队首)加入返回结果
    if(i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }
  return res
}
```