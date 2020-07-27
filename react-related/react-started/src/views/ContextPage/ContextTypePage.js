import React, { Component } from 'react';
import { ThemeContext } from './Context'


export default class ContextTypePage extends Component {
  // class上的contextType属性会被重赋值为⼀一个由React.createContext()创建的 Context对象。
  // 这能让你使⽤用this.context来消费最近 Context 上的那个值。
  // 你可以在任何⽣生命周期中访问到它，包括 render 函数中
  static contextType = ThemeContext
  
  render () {
    const { msg } = this.props
  return (
    <div style={{border: '1px solid #ccc', padding: '10px'}}>
      <h2>ContextTypePage</h2>
      <p>class上的contextType属性会被重赋值为⼀一个由React.createContext()创建的 Context对象</p>
      <p>{ msg ? `${msg} : ${JSON.stringify(this.context)}` : `从Provider取值: ${this.context}`}</p>
    </div>
    )
  }
}