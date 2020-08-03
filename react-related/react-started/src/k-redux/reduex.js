function compose(...fns){
  // 参数为空
  if(!arguments.length) {
    return args => args
  }
  if(arguments.length === 1) {
    return fns[0]
  }
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

export function createStore(reducer, applyMiddleware){

  if(applyMiddleware) {
    return applyMiddleware(createStore)(reducer);
  }


  let currentState;
  let currentListeners = []
  function dispatch(action) {
    currentState= reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }
  

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    currentListeners.push(listener)
    return () => {
      currentListeners = currentListeners.filter(f => f !== listener)
    }
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}


export function applyMiddleware(...middlewares) {
    return createStore => reducer => {
      const store = createStore(reducer)
      let dispatch = store.dispatch
      
      const midApi = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      }
      const middlewareChain = middlewares.map(middleware => middleware(midApi))

      dispatch = compose(...middlewareChain)(store.dispatch)

      return {
        ...store,
        dispatch
      }
    }
}

// 暗号： 毛里塔尼亚
export function combineReducers (reducers) {
  return function combination(state = {}, action) {
    let nextState= {}
    let hasChangeed = {}
    for (let key in reducers) {
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        throw new Error(`undefined state`, action)
      }
      nextState[key] = nextStateForKey
      hasChangeed = hasChangeed || nextStateForKey !== previousStateForKey
    }

    hasChangeed = hasChangeed || reducers.length !== Object.keys(state).length
    return hasChangeed ? nextState : state
  }
}


export function bindActionCreators(creatots, dispatch) {
  const res = {}
  Object.keys(creatots).forEach(creator => {
    res[creator] = bindActionCreator(creatots[creator], dispatch)
  })
  return res
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}