import React, { Component } from 'react'
import RouterContext  from './RouterContext'

export default class Router extends Component {
  static computeRottMatch(pathname){
    return { path: '/', url: '/', param: {}, isExact: pathname === '/' }
  }
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
    // history 发生变化, 执行回调
    this.unlistener = props.history.listen((location) => {
      this.setState({location})
    })
  }

  componentWillUnmount() {
    if (this.unlistener) {
      this.unlistener()
    }
  }

  render() {
    // console.log('Router', this.props)
    return (
      <RouterContext.Provider 
      value={{
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRottMatch(this.state.location.pathname)
        }}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
