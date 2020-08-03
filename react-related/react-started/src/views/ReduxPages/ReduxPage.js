import React, { Component } from 'react'
// import store from '../kredux/redux'
import store from '../k-redux'

export default class ReduxPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    store.subscribe(() => {
      const value = store.getState()
      this.setState({counter: value})
    })
  }

  asyncAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'INCREMENT'})
        console.log('getState :>> ', getState());
      }, 1000)
    })
  }

  promiseAdd = () => {
    store.dispatch(Promise.resolve({
      type: 'INCREMENT',
      payload: 100
    }))
  }


  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Redux page</h2>
        <p>store.counter  ---> { counter }</p>
        <p>
          <button onClick={() => store.dispatch({ type: 'INCREMENT' })} >INCREMENT</button>
          <button onClick={() => store.dispatch({ type: 'DECREMENT'})}> DECREMENT </button>
          <button onClick={this.asyncAdd}> asyncAdd </button>
          <button onClick={this.promiseAdd}> asyncAdd </button>
        </p>
      </div>
    )
  }
}
