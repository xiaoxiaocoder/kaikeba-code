import React, { Component } from 'react';

export default function createForm(Comp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.options = {}
    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({[name]: value})
    }

    getFieldDecorator = (field, option) => Comp => {
      this.options[field] = option || {};
      return React.cloneElement(Comp, {
        value: this.state[field] || '',
        onChange: this.handleChange
      })
    }
    getFieldsValue =() => {
      return this.state
    }

    setFieldsValue = (states) => {
      this.setState(states)
    }

    // 暗号： 西撒哈拉
    validateFields = callback => {
      let err = {}
      let fieldErr = [] // 存储单个字段的错误值(可能是多个错误)
      let fieldVal = null
      let rules = null
      const {  options, state } = this
      for (const field in options) {
        fieldErr = []
        fieldVal = state[field]
        rules = options[field].rules
        if (!rules) continue;
        if(Array.isArray(rules)){
          // eslint-disable-next-line no-loop-func
          rules.forEach(rule => {
            if(rule.required && !fieldVal) {
              fieldErr.push(rule.message)
            } else {
              // ...
            }
          })
        } else {
          if(rules.required && !fieldVal) {
            fieldErr.push(rules.message)
          }
        }
        if(fieldErr.length) {
          err[field] = fieldErr
        }
      }
      
      callback && callback(Object.keys(err).length ? err : null, this.state)
    }
    getForm = () => {
      return {
        form: {
          validateFields: this.validateFields,
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue
        }
      }
    }

    render () {
      return (
        <Comp {...this.props} {...this.getForm()} />
      )
    }
  }
}