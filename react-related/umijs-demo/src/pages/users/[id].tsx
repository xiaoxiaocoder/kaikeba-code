import React from 'react';

// 约定式路由 nuxt
const User = (props) => {
  console.log('props :>> ', props);
  const { match } = props

  return (
    <>
      <h2>User Page</h2>
      <p>User Id: {match.params.id}</p>
    </>
  );
}

// 权限路由, 高阶组件配置
User.wrappers = ['@/wrappers/auth']

// 拓展路由属性
User.title = 'User Page'

export default User;
