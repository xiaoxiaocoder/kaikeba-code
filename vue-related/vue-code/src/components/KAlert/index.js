import Vue from 'vue'
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

// 处理propsData
function _handlePropsData(config, type){
  let props = typeof config === 'string' ? { message: config } : config
  return Object.assign(props, { type })
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