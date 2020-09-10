import React, { Component } from 'react';
import RouterContext from './RouterContext';

class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          console.log('context :>> ', context);
          const { history } = context;
          const { to, push =false} = this.props
          return (<LifeCycle OnMount={() => {
            push ? history.push(to) : history.replace(to)
            }}/>)
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Redirect;


class LifeCycle extends Component {
  state = {}

  componentDidMount() {
    const {OnMount} = this.props
    console.log('LifeCycle', this.props)
    if (OnMount) {
      OnMount.call(this, this)
    }
  }

  render () {return null}
}