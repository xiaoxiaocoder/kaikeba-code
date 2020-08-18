// eslint-disable-next-line
import React, { useContext, useEffect, useLayoutEffect, useReducer } from 'react'
import { bindActionCreators } from './reduex'

const Context = React.createContext()

export function Provider({store, children}){
  return ( 
      <Context.Provider value={store}>
        {children}
      </Context.Provider>
    )
}

export function connect(mapStateToProps, mapDispatchToProps){
  // 读取store state
  return WrapperedComponent => props => {
    const store = useContext(Context)
    const { getState, dispatch, subscribe } = store;
    const stateProps = mapStateToProps(getState())

    // ??????????
    let dispatchProps = { dispatch }
    if (typeof mapDispatchToProps === 'function') {
      dispatchProps = mapDispatchToProps(dispatch)
    } else if (typeof mapDispatchToProps === 'object') {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
    }

    // 实现函数组价版本的forceUpdate
    const [, forceUpdate] = useReducer(x=> x+1, 0)
    // useEffect, useLayoutEffect
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate()
      })

      return () => unsubscribe()
    }, [store])


    return <WrapperedComponent {...props} { ...stateProps } { ...dispatchProps } />
  }
}


export function useSelector(selector) {
  const store = useContext(Context)
  const { getState, subscribe } = store

  // 实现函数组价版本的forceUpdate
  const [, forceUpdate] = useReducer(x=> x+1, 0)
  // useEffect, useLayoutEffect
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })

    return () => unsubscribe()
  }, [store])

  return selector(getState())
}

export function useDispatch() {
  const store = useStore()
  return store.dispatch
}

function useStore() {
  return useContext(Context)
}