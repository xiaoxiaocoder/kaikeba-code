import React, { Component } from 'react';
// import { createForm } from 'rc-form';
import { Input } from '../../components/my-rc-form'
import myCreateForm from '../../components/my-rc-form/createForm'

const nameRules = [{required: true, message: '请输入用户名'}]
const pwdRules = [{required: true, message: '请输入密码'}]
// @createForm()
@myCreateForm
class RcFormPage extends Component {
  // constructor(props) {
  //   super(props)
  // }
  
  componentDidMount() {
    this.props.form.setFieldsValue({ username: "defalut" })
  }


  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form;
    console.log('submit', getFieldsValue())
    validateFields((err,val)=> {
      if(err) {
        console.warn('校验失败', err);
      } else {
        console.log('success');
      }
    })
  }

  render() {
    // console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>RcFormPage</h3>
        <p>{getFieldDecorator('username', {rules: nameRules})(<Input placeholder="username" />)}</p>
        <p>{getFieldDecorator('password', {rules: pwdRules})(<Input placeholder="password" />)}</p>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }

} 

export default RcFormPage