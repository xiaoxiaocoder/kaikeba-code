import Vue from 'vue'
// import Notice from './KNotice'
// import Notice from './KNotice-FLIP'
import Notice from './KNotice-Velocity'

const NotictCtor = Vue.extend(Notice)
let instance

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

export default Notice