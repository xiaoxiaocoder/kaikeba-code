import React, { useContext } from 'react'
import { ThemeContext, UserContext } from './Context';

export default function UseContextPage() {
  const themeContext = useContext(ThemeContext)
  const userContext = useContext(UserContext)
  let { themeColor } = themeContext
  if(!userContext) {
    console.log('UserContext.Consumer 节点树往上没有找到对应的Provider. UserContext.createContext没有提供默认值')
  }
  if (!themeColor) {
    console.log('ThemeContext.Consumer 节点树往上没有找到对应的Provider, 使用createContext时的默认值')
    themeColor = themeContext;
  }
  return (
    <div>
      <h2>UseContext Page</h2>
      <p style={{color: themeColor }} >themeColor</p>
      <p>userContext {userContext ? userContext.name : 'UserContext.createContext没有提供默认值'}</p>
    </div>
  )
}