import React, { Component } from 'react'
import FieldContext from './FieldContext';


export default class Item extends Component {
  static contextType = FieldContext;

  componentDidMount () {
    const { registerEntity } = this.context
    this.unregisterEntity = registerEntity(this)
  }

  componentWillUnmount() {
    this.unregisterEntity && this.unregisterEntity()
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const {name} = this.props
    const { setFieldValue, getFieldValue } = this.context;
    return {
      value: getFieldValue(name),
      onChange: event => {
        const newVal = event.target.value;
        setFieldValue({[name]: newVal})
      }
    }
  }
  render(){
    const { label, children } = this.props
    // console.log(name, rules);
    // 克隆input标签， 并给input添加事件
    const cloneChildren = React.cloneElement(children, this.getControlled())
    return (
      <div>
        <label>{label}: &nbsp;{cloneChildren}</label>
      </div>
    )
  }
}