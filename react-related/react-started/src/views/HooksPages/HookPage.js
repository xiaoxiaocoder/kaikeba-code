import React, { useReducer, useEffect, useLayoutEffect } from 'react';
import counterReducer from '../../k-redux/counterReducer'

const init = arg => {
  console.log('init', arg)
  return arg + 10
}

const HookPage = () => {
  const [state, dispatch] = useReducer(counterReducer, 0, init)

  // 副作用: 修改DOM, 请求数据, 添加订阅等.
  // useEffect 延迟执行
  useEffect(() => {
    console.log('useEffect')
  }, [state])

  // useLayout和DOM变更同步执行, 会阻塞渲染
  useLayoutEffect(()=> {
    console.log('useLayoutEffect')
  }, [state])
  

  return (
    <div>
      <h3>HookPage</h3>
      <p>{state}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Add</button>
    </div>
  );
}

export default HookPage;
