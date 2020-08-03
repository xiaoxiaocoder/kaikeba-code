import React, { Component } from 'react'
import { matchPath } from 'react-router-dom'
import RouterContext from './RouterContext'


export default class Route extends Component {
  render() {
    // console.log(this.props)
    return <RouterContext.Consumer>
      {
        context => {
          const location = context.location
          const { children, component, render, path, computedMatch } = this.props
          {/* const match = location.pathname === path */}
          /// TODO: 第二个参数 this.props??
          const match = 
            computedMatch 
            ? computedMatch 
            : path
              ? matchPath(location.pathname, this.props)
              : context.match

          const props = {
            ...context,
            match
          }

          // match children, compnent, render null
          // 不match children, functin, nul
          return <RouterContext.Provider value={props}>
            {
              match 
              ? (
                children 
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                    ? React.createElement(component, props) 
                    : render
                      ? render(props)
                      : null
              )
              : (
                typeof children === 'function'
                ? children(props)
                : null
              )
            }
          </RouterContext.Provider>
        }
      }
    </RouterContext.Consumer>
  }
}
