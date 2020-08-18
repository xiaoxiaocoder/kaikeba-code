const rawType = target => Object.prototype.toString.call(target)
const objType = rawType({})

const hasProto = __proto__ in {}

function proxyProperty(target, property) {
  let keys = Object.keys(target[property])
  keys.forEach(key => {
    Object.defineProperty(target, key, {
      get() {
        return target[property][key]
      },
      set (newVal) {
        target[property][key] = newVal
      }
    })
  })
}


function def(target, key, val) {
  Object.defineProperty(target, key, {
    value: val,
    enumerable: false
  })
}