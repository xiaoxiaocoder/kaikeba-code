import React, { Component } from 'react';

// Hoc: 参数为组件, 返回值为新组件的函数
const hoc = Comp => props => {
  // 传入的props为 {name: "Hoc params"}
  // 需要解构成单值形式, {} 为jsx求值标识符
  return <Comp {...props} />
}

function Child(props) {
  return <h2>Child {props.name}</h2>
}

const Foo = hoc(Child)

const Fooooo = hoc(hoc(Child))

@hoc
@hoc
class HocDecoratorComponent extends Component {
  render() {
    return <h3>HocDecoratorComponent {this.props.name}</h3>
  }
}

export default class HocPage extends Component {
  render () {
    return (<div>
      <Foo name="Hoc params"></Foo>
      <Fooooo name ="Fooooo"/>
      <HocDecoratorComponent name="Hoc Decorator Component" />
    </div>)
  }
}
