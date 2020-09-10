import Vue from 'vue'
// import Notice from './KNotice'
// import Notice from './KNotice-FLIP'
import Notice from './KNotice-Velocity'

const NotictCtor = Vue.extend(Notice)
let instance
import KAlert from './KAlert'

const AlertCtor = Vue.extend(KAlert)
/**
 * 暗号： 村长喊你来搬砖
 * 创建Notice组件实例
 */
export function alertInstance (propties = {}) {
  const instance = new AlertCtor({ propsData: propties})
  return instance.$mount()
}

function init(){
  instance = new NotictCtor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}

const caller = (props = {}) => {
  if (!instance) {
    init()
  }
  instance.add(props)
}

const callerWithType = type => {
  return function (props) {
    if(typeof props === 'string') {
      props = { message: props }
    }
    caller(Object.assign(props, { type }))
  }
}

export function install(Vue) {
  Vue.prototype.$message = caller
  Vue.prototype.$success = callerWithType('success')
  Vue.prototype.$error = callerWithType('error')
}
// 创建消息为成功的notice
export function success(config) {
  const component = alertInstance(_handlePropsData(config, 'success'))
  component.show()
}

// 创建消息为失败的notice
export function error(config) {
  const component = alertInstance(_handlePropsData(config, 'error'))
  component.show()
}

// Vue.prototype.$success = success
// Vue.prototype.$error = error

export default KAlert