import React, { useState } from 'react'
import { Redirect } from 'umi'

export default function Auth(props) {
  const { isLogin } = useAuth();

  if(isLogin) {
    console.log('isLogin :>> ', isLogin);
    return <div>{props.children}</div>
  } else {
    return <Redirect to="/foo" />
  }
}


function useAuth() {
  const [isLogin, setLoginStatus] = useState(true);

  return {
    isLogin
  }
}
