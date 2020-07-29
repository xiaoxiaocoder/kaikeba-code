import React, { useRef } from 'react'

class FormStore {
  constructor() {
    // username, password
    this.store = {}
    this.fieldEntities = []
    this.callbacks = {}
  }

  registerEntity = entity => {
    // console.log(entity.props.name, entity);
    this.fieldEntities.push(entity)
    // console.log(this.fieldEntities);

    return () => {
      this.fieldEntities = this.fieldEntities.fillter(item => item !== entity)
      delete this.store[entity.props.name]
    }
  }
  getFieldValue = name => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return this.store
  }
  setFieldValue = store => {
    this.store = {
      ...this.store,
      ...store
    }
    // console.log('setFieldValue', this.store, this.fieldEntities.length);
    this.fieldEntities.forEach(entity => {
      const { name } = entity.props
      Object.keys(store).forEach(key => {
        // console.log(key, name);
        if(key ===name) {
          entity.onStoreChange()
        }
      })
    })
  }
  setFieldsValue = stores => {
    this.store = {
      ...this.store,
      ...stores
    }
    // console.log(stores);
    this.fieldEntities.forEach(entity => {
      const { name } = entity.props
      Object.keys(stores).forEach(key => {
        if(key ===name) {
          entity.onStoreChange()
        }
      })
    })
  }
  // TODO: 重置标签逻辑
  resetFieldsValue = () => {
    this.store = {}
    console.log('resetFieldsValue', this.store)
  }

  validate = () => {
    let err = [];
    // todo
    this.fieldEntities.forEach(entity => {
      const {name, rules} = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        //  出错
        err.push({
          [name]: rule.message,
          value
        });
      }
    });
    return err;
  }; 

  submit = () => {
    console.log("this.", this.fieldEnetities); //sy-log
    let err = this.validate();
    // 在这里校验 成功的话 执行onFinish ，失败执行onFinishFailed
    const {onFinish, onFinishFailed} = this.callbacks;
    if (err.length === 0) {
      // 成功的话 执行onFinish
      onFinish(this.getFieldsValue());
    } else if (err.length > 0) {
      // ，失败执行onFinishFailed
      onFinishFailed(err);
    }
  };

  setCallback = (callbacks) => {
    this.callbacks = { ...this.callbacks, ...callbacks }
  }

  getForm() {
    return {
      registerEntity: this.registerEntity,
      setFieldValue: this.setFieldValue,
      setFieldsValue: this.setFieldsValue,
      resetFieldsValue: this.resetFieldsValue,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      submit: this.submit
    }
  }
}

export default  function useForm(form) {
  const formRef = useRef()
  if(!formRef.current) {
    if(form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore()
      formRef.current = formStore; 
    }
  }
  return [formRef.current]
}