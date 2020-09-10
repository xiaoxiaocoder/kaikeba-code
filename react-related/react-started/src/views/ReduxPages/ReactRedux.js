/* eslint-disable */

import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../../k-redux/reduex'
import { connect } from '../../k-redux/react-redux'

// connect 需要在createStore时, 使用combineReducers返回一个纯对象
@connect(
  // mapStateToProps
  (store) => {
    const { count, visibility } = store
    return {
      count: count,
      visib: visibility
    }
  },
  // mapDispatchToProps   Object || function
  // (dispatch) => {
  //   let crateors = {
  //     add: () => ({type: 'INCREMENT'}),
  //     minus: () => ({type: 'DECREMENT'}),
  //   }
  //   crateors = bindActionCreators(crateors, dispatch)
  //   // console.log(crateors)
  //   return {
  //     dispatch,
  //     ...crateors
  //   }
  // }
  {
    add: () => ({type: 'INCREMENT'})
  }
  
)
class ReactReduxPage extends Component {
  render() {
    const { count, state, add } = this.props
    // console.log(this.props)
    return (
      <div>
        <p>{count}</p>
        <button onClick={add}>ADD</button>
      </div>
    )
  }
}


export default ReactReduxPage