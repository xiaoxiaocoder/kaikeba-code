const arrayProto = Array.prototype

const overridePrototype = Object.create(arrayProto)
const arrayMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'sort',
  'reverse',
  'splice'
]

arrayMethods.forEach(method => {
  const original = overridePrototype[method]
  Object.defineProperty(overridePrototype, method, function(...args) {
    const result = original.call(this, arguments)
    const ob = this.__ob__
    let inserted = []
    switch(method) {
      case 'push':
      case 'unshift':
        args = args;
        break;
      case 'splice':
        args = args.slice(2);
        break;
    }

    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
}) 