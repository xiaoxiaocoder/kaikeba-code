
// 约定式路由时的全局布局文件

import React from 'react';

const index = (props) => {
  const { location } = props;
  if(location.pathname === '/login') {
    return <SimpleLayout>{props.children}</SimpleLayout>
  }
  return (
    <div style={{padding: 20}}>
      <Header></Header>
      {props.children}
      <Footer/>
    </div>
  );
}

export default index;


function SimpleLayout(props) {
  return <div>{props.children}</div>
}

function Header() {
  return (<header>Header</header>)
}



function Footer() {
  return (<footer>Header</footer>)
}
