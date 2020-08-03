import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createStore, applyMiddleware, combineReducers } from './k-reduex'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// eslint-disable-next-line
import {logger, thunk, promise } from './redux-middleware'

import counterReducer from './counterReducer'
import visibilityReducer from './visibilityReducer'

let store = createStore(
  // counterReducer,
  combineReducers({count: counterReducer, visibility: visibilityReducer}), 
  applyMiddleware(thunk, promise) // , logger

)

export default store
