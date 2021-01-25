import {
  Stack,
  isValidBrackets,
  dailyTemperatures,
  MinStack,
  MinStack2,
  Queue,
  maxSlidingWindow,
  maxSlidingWindow2,
} from "../6-stack";

describe("栈与队列", () => {
  test("有效括号", () => {
    let str = "()";
    expect(isValidBrackets(str)).toEqual(true);

    str = "()[]{}";
    expect(isValidBrackets(str)).toEqual(true);

    str = "(}";
    expect(isValidBrackets(str)).toEqual(false);

    str = "([)]";
    expect(isValidBrackets(str)).toEqual(false);

    str = "{[]}";
    expect(isValidBrackets(str)).toEqual(true);

    str = "";
    expect(isValidBrackets(str)).toEqual(true);
  });

  test("每日温度问题", () => {
    const stack = [73, 74, 75, 71, 69, 72, 76, 73];

    expect(dailyTemperatures(stack)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test("最小栈", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);

    minStack.pop();
    expect(minStack.top()).toEqual(0);

    expect(minStack.getMin()).toEqual(-2);
  });

  test("最小栈 使用双stack", () => {
    const minStack = new MinStack2();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);

    minStack.pop();
    expect(minStack.top()).toEqual(0);

    expect(minStack.getMin()).toEqual(-2);
  });
});

describe("队列", () => {
  test("使用栈实现队列", () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.pop()).toEqual(1);
    expect(queue.empty()).toEqual(false);
    expect(queue.pop()).toEqual(2);
  });

  test("滑动窗口问题", () => {
    const arr = [1, 3, -1, -3, 5, 3, 6, 7, 8];

    expect(maxSlidingWindow(arr, 3)).toEqual([3, 3, 5, 5, 6, 7, 8]);
  });

  test("滑动窗口问题-使用双端队列", () => {
    const arr = [1, 3, -1, -3, 5, 3, 6, 7, 8];

    expect(maxSlidingWindow2(arr, 3)).toEqual([3, 3, 5, 5, 6, 7, 8]);
  });
});
