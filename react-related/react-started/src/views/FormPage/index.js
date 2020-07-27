import React, { useEffect } from 'react';
import Form, {Item, Input, Button} from '../../components/my-rc-form'

// const FormItem = Form.Item
// console.log(Input);

const nameRules = [{required: true, message: '请输入用户名'}]
const pwdRules = [{required: true, message: '请输入密码'}]

export default function FormPage () {

  const [form] = Form.useForm()

  const onFinish = val => {
    console.log('onFinish', val);
  }
  const onFinishFailed = val=> {
    console.log('onFinishFailed', val);
  }

  useEffect(()=> {
    form.setFieldValue({username: "default"});
  }, [])

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} >
      <Item label="用户名" name="username" rules={nameRules}>
        <Input placeholder="username"></Input>
      </Item>
      <Item label="密码" name="password" rules={pwdRules}>
        <Input placeholder="password" type="password"></Input>
      </Item>
      <p><Button>提交</Button>&nbsp;<Button>重置</Button></p>
    </Form>
  )
}