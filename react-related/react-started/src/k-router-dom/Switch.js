import React, { Component } from 'react';
import RouterContext from './RouterContext'
import { matchPath } from 'react-router-dom'

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        { context => {
          // match 是否匹配, element 记录匹配的元素
          let match, element
          React.Children.forEach(this.props.children, child => {
            if (match == null  && React.isValidElement(child)) {
              element = child;
              const {path} = child.props
              match = path ? matchPath(context.location.pathname, child.props): context.match
            }
          })
          return match ? React.cloneElement(element, {
            computedMatch: match
          }) : null
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Switch;
