import isPromise from "is-promise";

export function logger({getState}) {
  return next => action => {
    
    const prevState = getState()
    const returnState = next(action)
    const nextState = getState()
    
    console.log('===========');
    console.log('action.type :>> ', action.type);
    console.log('prevState :>> ', prevState);
    console.log('nextState :>> ', nextState);
    console.log('===========');

    return returnState;
  }
}


export function thunk({dispatch, getState}) {
  return next => action => {
    if(typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      next(action)
    }
  }
}


export function promise({dispatch}) {
  return next => action => {
    console.log(action)
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}