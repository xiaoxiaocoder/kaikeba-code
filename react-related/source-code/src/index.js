// import React from 'react'
// import ReactDOM from 'react-dom'

import React from './k-react'
import ReactDOM from './k-react-dom'

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

// function App() {
//   return (
//     <div>
//       <h1>hello</h1>
//       world
//       <>123</>
//       <ClassComponent name="Class" theme="pink" />
//       <FunctionComponent name="Functional"/>
//       <ul>
//         {[1,2,3].map(item => <li key={item}>{item}</li>) }
//       </ul>
//     </div>
//   )
// }

const App = (
  <div className="border">
    <p>全栈</p>
    <a href="https://www.kaikeba.com/">开课吧</a>
    {/* <ClassComponent name="class" color="red" />
    <FunctionComponent name="function" /> */}
    {/* {[1, 2].map(item => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))} */}
    {/* <>
      <h1>aaa</h1>
      <h1>bbb</h1>
    </> */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'))