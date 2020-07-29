// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from './k-reduex'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {logger, thunk, promise} from './redux-middleware'


function counter(state=0, action) {
  // console.log('counter', action)
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

let store = createStore(counter, applyMiddleware(thunk, logger, promise))

export default store
