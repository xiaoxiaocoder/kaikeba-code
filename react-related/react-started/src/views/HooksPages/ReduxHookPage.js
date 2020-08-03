import React, { useCallback } from 'react'
// import store from '../kredux/redux'
// import store from '../k-redux'
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector, useDispatch } from '../../k-redux/react-redux'


export default function ReduxHookPage(props) {
  const count = useSelector(({count}) => count)
  const dispatch = useDispatch()
  const add = useCallback(
    () => {
      dispatch({type: 'INCREMENT'})
    },
    [count],
  )

  return (
    <div>
      <h2>Redux Hook page</h2>
      <p>store.counter  ---> { count }</p>
      <p>
        <button onClick={add}>Add </button>
      </p>
    </div>
  )
}
