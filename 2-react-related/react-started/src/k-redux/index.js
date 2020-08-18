// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, applyMiddleware, combineReducers } from './reduex'
// import { combineReducers as myCombineReducers } from './reduex'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// eslint-disable-next-line
import {logger, thunk, promise } from './redux-middleware'

import counterReducer from './reducers/counter'
import visibilityReducer from './reducers/visibility'

const reducers = combineReducers({count: counterReducer, visibility: visibilityReducer})
console.log('reducers :>> ', reducers);
let store = createStore(
  // counterReducer,
  reducers, 
  applyMiddleware(thunk, promise) // , logger

)

export default store
