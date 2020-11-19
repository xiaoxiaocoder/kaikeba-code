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
  const len = temps.length
  const stack = new Stack()
  const res = (new Array(len)).fill(0)
  for(let i = 0; i < len; i++) {
      // 若栈不为0，且存在打破递减趋势的温度值
    while(stack.length() && temps[i] > temps[stack.top()]) {
      const top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}


export class MinStack {
  _arr = []
  _minArr = []

  push(val) {
    this._minArr[this._minArr.length] = val
  
    this._arr.unshift(val)
  }

  top () {
    return this._arr[0]
  }

  pop() {
    const val = this._arr.shift()
    const index = this._minArr.indexOf(val)
    this._minArr.splice(index, 1)
    return val
  }

  get length () {
    return this._arr.length
  }

  getMin() {
    return Math.min.apply(null, this._minArr)
  }
}

export class MinStack2 {
  
  constructor() {
    this.stack = new Stack()
    this.stack2 = new Stack()
  }

  top () {
    return this.stack.top()
  }

  push(val) {
    this.stack.push(val)
    if (this.stack2.length() === 0 || val < this.stack2.top()) {
      this.stack2.push(val)
    }
  }

  pop() {
    const val = this.stack.pop()
    const top = this.stack2.top()
    if (val && top && val === top) {
      this.stack2.pop()
    }
  } 

  getMin() {
    return this.stack2.top()
  }
}