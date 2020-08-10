// import React from 'react';
import React from './k-react'
// import ClassComponent from './components/ClassComponent'

export default function () {
  return (
    <div>
      <h1>hello</h1>
      world
      <>123</>
      <ClassComponent name="Class" />
      <FunctionComponent name="Functional"/>
      <ul>
        {[1,2,3].map(item => <li>{item}</li>) }
      </ul>
    </div>
  )
}


class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.name} Component
        <h2>{this.props.msg}</h2>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  msg: '默认父组件传来的值'
}



function FunctionComponent(props) {
  console.log('FunctionComponents :>> ', props);
  return (
    <div>
      {props.name} Component
    </div>
  )
}
