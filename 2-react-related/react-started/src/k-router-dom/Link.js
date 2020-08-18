import React, { Component } from 'react';
// import history from 'history'
import RouterContext from './RouterContext'

class Link extends Component {
  static contextType = RouterContext
  handleClick = (e) => {
    e.preventDefault();
    this.context.history.push(this.props.to)
  }
  render() {
    // console.log('Link', this.props);
    const { to, children, ...restProps } = this.props
    return <a href={to} {...restProps} onClick={this.handleClick}>{children}</a>
  }
}

export default Link;
