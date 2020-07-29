import React from 'react'

import _Form from './Form'
import Item from './Item'
import Input from './Input'
import Button from './Button'
import useForm from './useForm';

// export useForm from './useForm';
// export Item from './Item'
// export Input from './Input'
// export Button from './Button'
export { Item,Input, Button, useForm }

// const Form = _Form;
// class组件使用 使用 React.forwardRef
const Form =  React.forwardRef(_Form);

export default Form

