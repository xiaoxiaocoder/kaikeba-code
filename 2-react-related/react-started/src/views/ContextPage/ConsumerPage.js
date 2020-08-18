import React, { Component } from 'react'
import { ThemeContext, UserContext } from './Context';

export default class ConsumerPage extends Component {

  render () {
    const { msg } = this.props
    return (
      <div>
        <br/>
        <h2>ConsumerPage</h2> 
        <h4>{ msg ? msg : '节点树往上找配置了对应的Provider'}</h4>
        <ThemeContext.Consumer>
          {
            context => (
              <>
                <p style={{color: context.themeColor || context}}>
                  { msg ? 'createContext默认值:' + JSON.stringify(context) : `从Provider取值: ${JSON.stringify(context)}` }
                </p>
                <UserContext.Consumer>
                  { context => <HandleUserContext {...context} /> }
                </UserContext.Consumer> 
              </> 
            )
          }
        </ThemeContext.Consumer>
      </div>
    )
  }
}

function HandleUserContext(context) {
  return <strong>UserContext: {context.name || 'UserContext.Consumer节点树往上没有找到对应的Provider'}</strong>;
}

