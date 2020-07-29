import React from 'react'
import _Form from './Form'

export useForm from './useForm';
export Item from './Item'
export Input from './Input'
export Button from './Button'

// const Form = _Form;
// class组件使用 使用 React.forwardRef
const Form =  React.forwardRef(_Form);

export default Form

