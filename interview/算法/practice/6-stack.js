export class Stack {
  _arr = [];

  push(v) {
    this._arr.unshift(v);
  }

  pop() {
    return this._arr.shift();
  }

  top() {
    return this._arr[0];
  }

  length() {
    return this._arr.length;
  }
}

const modifierMap = {
  "(": ")",
  "[": "]",
  "{": "}",
};

export function isValidBrackets(str) {
  const stack = new Stack();
  const leftKeys = Object.keys(modifierMap);
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (leftKeys.includes(char)) {
      stack.push(modifierMap[char]);
    } else {
      if (stack.length() && char !== stack.pop()) {
        return false;
      }
    }
  }

  return !stack.length();
}

export function dailyTemperatures(temps) {
  const len = temps.length;
  const stack = new Stack();
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length() && temps[i] > temps[stack.top()]) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
}

export class MinStack {
  _arr = [];
  _minArr = [];

  push(val) {
    this._minArr[this._minArr.length] = val;

    this._arr.unshift(val);
  }

  top() {
    return this._arr[0];
  }

  pop() {
    const val = this._arr.shift();
    const index = this._minArr.indexOf(val);
    this._minArr.splice(index, 1);
    return val;
  }

  get length() {
    return this._arr.length;
  }

  getMin() {
    return Math.min.apply(null, this._minArr);
  }
}

export class MinStack2 {
  constructor() {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }

  top() {
    return this.stack.top();
  }

  push(val) {
    this.stack.push(val);
    if (this.stack2.length() === 0 || val < this.stack2.top()) {
      this.stack2.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    const top = this.stack2.top();
    if (val && top && val === top) {
      this.stack2.pop();
    }
  }

  getMin() {
    return this.stack2.top();
  }
}

/**
 * 队列
 */

/**
 * 使用栈来模拟队列
 * FIFO
 */
export class Queue {
  constructor() {
    /** 存取顺序是先进后出的 */
    this.stack = new Stack();
    /**用于置换stack中的元素, top. pop 为正常队列顺序 */
    this.cache = new Stack();
  }

  push(val) {
    this.stack.push(val);
  }

  /**
   * 每次取值时, 只要cache中有值, 表示先前存的的有序数值还没完全取出
   * 每当cache为空时, 再重新将stack中的值导入到cache中
   */
  reset() {
    const cacheLen = this.cache.length();
    if (cacheLen <= 0) {
      while (this.stack.length()) {
        this.cache.push(this.stack.pop());
      }
    }
  }

  /**
   * 找出队列第一个元素
   */
  peek() {
    this.reset();
    return this.cache.top();
  }

  pop() {
    this.reset();
    return this.cache.pop();
  }

  // shift() {

  // }

  // tail() {

  // }

  empty() {
    return this.stack.length() == 0 && this.cache.length() == 0;
  }

  get length() {
    return this.stack.length() + this.cache.length();
  }
}

/**
 * 滑动窗口
 * @param {Array<number>} nums 数组
 * @param {number} k 滑动窗口K
 */
export function maxSlidingWindow(nums, k) {
  const len = nums.length;
  const res = [];

  // 窗口还是索引
  let left = 0;
  // 窗口最后一个元素索引
  let right = k - 1;

  while (right < len) {
    // TODO: slice是个闭开区间(不包含结尾元素)
    const range = nums.slice(left, right + 1);
    let max = Math.max.apply(null, range);
    res.push(max);
    left++;
    right++;
  }
  return res;
}

export function maxSlidingWindow2(nums, k) {
  // 缓存数组长度
  const len = nums.length;

  // 初始化结果长度
  const res = [];

  // 初始化队列 (存储递减队列索引)
  // const queue = new Queue()
  const queue = [];
  // 开始遍历数组
  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      // 将队尾元素(索引)不断出队, 直至队尾元素大于等于当前元素
      queue.pop();
    }
    // 入队当前元素索引
    queue.push(i);

    while (queue.length && queue[0] <= i - k) {
      // 对头元素索引出队
      queue.shift();
    }

    // 判断滑动窗口的状态, 只有在被遍历的元素个数大于k的时候, 才更新结果数组
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }
  console.log("res :>> ", res);
  return res;
}

const lefToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};


function isVaild(str) {
    const leftKeys = Object.keys(str)
    const stack = new Stack()
    for(let i = 0; len = str.length; i < len; i++){
        const char = str[i]
        if(leftKeys.includes(char)){
            stack.push(lefToRight[char])
            // 不在key值里, 即可能为), ], } 其中一个
        } else if(stack.length() && stack.top() !== char) {
            return false
        }
    }   
    return !stack.length()
}


function pushedAndPoped(nums1, nums2) {
    if(nums1.length() !== nums2.length()) return false
    const stack = new Stack()
    // 反转队列
    while(nums1.length()) {
        stack.push(num1.pop())
    }
    let num1, num2
    while(stack.length()) {
        num1 = stack.pop()
        num2 = nums2.pop()
        if(num1 !== num2) {
            return false
        }
    }

    return true
}