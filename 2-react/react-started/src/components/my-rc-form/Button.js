import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {children, ...other} = this.props

    return (
      <button {...other}>{children}</button>
    )
  }
}