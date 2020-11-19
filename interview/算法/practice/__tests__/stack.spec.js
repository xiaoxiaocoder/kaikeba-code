import { Stack, isValidBrackets, dailyTemperatures, MinStack, MinStack2 } from '../6-stack'

describe('栈与队列', () => {
  test('有效括号', () => {
    let str = '()'
    expect(isValidBrackets(str)).toEqual(true)

    str = '()[]{}'
    expect(isValidBrackets(str)).toEqual(true)

    str = '(}'
    expect(isValidBrackets(str)).toEqual(false)

    str = '([)]'
    expect(isValidBrackets(str)).toEqual(false)

    str = '{[]}'
    expect(isValidBrackets(str)).toEqual(true)

    str = ''
    expect(isValidBrackets(str)).toEqual(true)

  })

  test('每日温度问题', () => {
    const stack = [73, 74, 75, 71, 69, 72, 76, 73]
    
    expect(dailyTemperatures(stack)).toEqual([1, 1, 4, 2, 1, 1, 0, 0])

  })

  test('最小栈', () => {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.getMin()).toEqual(-3)

    minStack.pop()
    expect(minStack.top()).toEqual(0)
    
    expect(minStack.getMin()).toEqual(-2)
  })
  
  test('最小栈 使用双stack', () => {
    const minStack = new MinStack2()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.getMin()).toEqual(-3)

    minStack.pop()
    expect(minStack.top()).toEqual(0)
    
    expect(minStack.getMin()).toEqual(-2)
  })
});
