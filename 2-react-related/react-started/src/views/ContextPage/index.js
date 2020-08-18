import React, { Component } from 'react';
import { ThemeContext, UserContext } from './Context';
import ConsumerPage from './ConsumerPage';
import ContextTypePage from './ContextTypePage';
import UseContextPage from './UseContextPage';

export default class ContextPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      themeColor: 'green',
      user: {
        name: 'xiaoming'
      }
    }
  }

  changeColor = () => {
    const {themeColor} = this.state
    this.setState({
      themeColor: themeColor === 'green' ? 'red' : 'green'
    })
  }

  render () {
    const { themeColor, user }= this.state
    return (
    <div>
      <button onClick={this.changeColor}>change color</button>
      {/* 没有配置Provider, ThemeContext.Consumer取创建createContext时的默认值 */}
      <ContextTypePage msg="未配置Context.Provider, Consumer取创建createContext时的默认值"/>
      <ThemeContext.Provider value={{themeColor , msg: '动态数据'}} >
        <ConsumerPage />
        <UseContextPage />
        <ThemeContext.Provider value={{themeColor: 'skyblue', msg: 'Provider传入(页面写死)'}} >
          <UserContext.Provider value={user} >
            <ConsumerPage />
            <UseContextPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </ThemeContext.Provider>
      <UseContextPage />
    </div>)
  }
}