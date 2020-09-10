import React from 'react';
import FieldContext from './FieldContext'
import useForm from './useForm';

let times = 1
/**
 * 
 * @param {object} param0 props
 * @param {object} ref ref
 */
export default function Form ({form, children, onFinish, onFinishFailed}, ref) {
  console.log('form components :>> ', form, times++);
  const [ formInstance ] = useForm(form)
  console.log('FormInstance', formInstance)
  
  React.useImperativeHandle(ref, () => formInstance)
  
  formInstance.setCallback({onFinish, onFinishFailed})
  return (
    <form
      onSubmit={
        event => {
          event.preventDefault();
          formInstance.submit()
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}