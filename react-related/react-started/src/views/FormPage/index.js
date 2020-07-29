import React, { useEffect } from 'react';
import 
  Form, 
  {Item, Input, Button} from '../../components/my-rc-form/index'

// import _Form from '../../components/my-rc-form/Form'

// const Form = React.forwardRef(_Form)


const nameRules = [{required: true, message: '请输入用户名'}]
const pwdRules = [{required: true, message: '请输入密码'}]

// export default function FormPage () {

//   const [form] = Form.useForm()

//   const onFinish = val => {
//     console.log('onFinish', val);
//   }
//   const onFinishFailed = val=> {
//     console.log('onFinishFailed', val);
//   }

//   useEffect(()=> {
//     form.setFieldValue({username: "default"});
//   }, [])

//   return (
//     <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} >
//       <Item label="用户名" name="username" rules={nameRules}>
//         <Input placeholder="username"></Input>
//       </Item>
//       <Item label="密码" name="password" rules={pwdRules}>
//         <Input placeholder="password" type="password"></Input>
//       </Item>
//       <p><Button>提交</Button>&nbsp;
//       <Button type="button" onClick={(e) => 
//         {
//           e.preventDefault();
//           form.resetFieldsValue();
//         }
//       }>重置</Button></p>
//     </Form>
//   )
// }


/**
 *  1. 
 *      const [form] = Form.useForm() 修改为 formRef = React.createRef()
 *  2.  render方法中, 使用form={form} 修改为ref={formRef}
 *  3.  组件方法中使用React.forwardRef() 包裹Form组件, 传递引用
 *  4.  Form组件构造方法中, 去掉第一个参数(props)中的form, 添加第二个参数 ref
 *  5.  Form组件中添加 React.useImperativeHandle(ref, () => formInstance)
 */
class FormPage extends React.Component {
  state = {  }

  formRef = React.createRef()

  componentDidMount() {
    console.log('form', this.formRef.current)
    const { setFieldsValue } = this.formRef.current
    setFieldsValue({username: 'default'})
  }

  onFinish =(val) => {
    console.log('onFinish', val);
  }

  onFinishFailed = val => {
    console.log('onFinishFailed', val)
  }

  render() {
    return (
      <div>
        <h3>class Form Page</h3>
        <Form 
          ref={this.formRef} 
          onFinish={this.onFinish} 
          onFinishFailed={this.onFinishFailed} >
          <Item label="用户名" name="username" rules={nameRules}>
            <Input placeholder="username"></Input>
          </Item>
          <Item label="密码" name="password" rules={pwdRules}>
            <Input placeholder="password" type="password"></Input>
          </Item>
          <p>
            <Button>提交</Button>&nbsp;
            <Button type="button" onClick={(e) => 
              {
                e.preventDefault();
              }
            }>重置</Button>
          </p>
        </Form>
      </div>
    );
  }
}

export default FormPage;