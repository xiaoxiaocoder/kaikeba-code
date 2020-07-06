class Observer {
  
  constructor(vm, obj) {
    this.vm = vm;
    def(this, '__ob__', this)

    if (Array.isArray(obj)) {
      const argument  = hasProto ? replaceProto : copyProto
      argument(obj)
    } else {
      this.walk(obj)
    }

    return obj
  }

  
  replaceProto(obj) {
    obj.__proto__ = overridePrototype
  }

  copyProto(obj) {
    arrayMethods.forEach(key => {
      def(obj, key, arrayMethods[key])
    })
  }

  walk(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const val = obj[key];
        defineReactive(obj, key, val)
      }
    }
  }
}

function observe(obj) {
  if (rawType(obj) !== objType || obj == null) {
    return
  }
  new Observer(obj)
}

function defineReactive(obj, key, val) {
  // 传入的val有可能为对象, 即对象嵌套的去年情况
  observe(val)

  // 每创建一个defineReactive, 都会创建一个dep
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      // console.log('getter ', key)
      if (Dep.target) {
        dep.depend(Dep.target)
      }
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        // console.log('setter', newVal, val)
        // 新赋值的对象可能为对象
        observe(newVal)
        val = newVal

        dep.notify()
      }
    }
  })
}