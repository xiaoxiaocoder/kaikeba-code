// import React from 'react';
import React from './k-react'
// import ClassComponent from './components/ClassComponent'
import './app.css'

class ClassComponent extends React.Component {
  static defaultProps = {
    msg: '默认父组件传来的值'
  }
  render() {
    return (
      <div className={['box', this.props.theme].join(' ')}>
        {this.props.name} Component
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

function FunctionComponent(props) {
  return (
    <div>
      {props.name} Component
    </div>
  )
}

export default function () {
  return (
    <div>
      <h1>hello</h1>
      world
      <>123</>
      <ClassComponent name="Class" theme="pink" />
      <FunctionComponent name="Functional"/>
      <ul>
        {[1,2,3].map(item => <li key={item}>{item}</li>) }
      </ul>
    </div>
  )
}

// export default (
//   <div>
//   <h1>hello</h1>
//   world
//   <>123</>
//   <ClassComponent name="Class" theme="pink" />
//   <FunctionComponent name="Functional"/>
//   <ul>
//     {[1,2,3].map(item => <li>{item}</li>) }
//   </ul>
// </div>
// )