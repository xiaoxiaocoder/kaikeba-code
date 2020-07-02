import Vue from 'vue'
import Notice from './KNotice'

const NotictCtor = Vue.extend(Notice)
/**
 * 暗号： 村长喊你来搬砖
 * 创建Notice组件实例
 */
export function noticeInstance (propties = {}) {
  const instance = new NotictCtor({ propsData: propties})
  return instance.$mount()
}

// 处理propsData
function _handlePropsData(config, type){
  let props = typeof config === 'string' ? { message: config } : config
  return Object.assign(props, { type })
}

// 创建消息为成功的notice
export function success(config) {
  const component = noticeInstance(_handlePropsData(config, 'success'))
  component.show()
}

// 创建消息为失败的notice
export function error(config) {
  const component = noticeInstance(_handlePropsData(config, 'error'))
  component.show()
}

Vue.prototype.$success = success
Vue.prototype.$error = error

export default Notice