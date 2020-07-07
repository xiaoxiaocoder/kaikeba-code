class Observer {
  
  constructor(vm, obj) {
    this.vm = vm;
    this.dep = new Dep()
    def(this, '__ob__', this)

    if (Array.isArray(obj)) {
      const argument  = hasProto ? replaceProto : copyProto
      argument(obj)
      this.observeArray(obj)
    } else {
      this.walk(obj)
    }

    return obj
  }

  
  observeArray(items) {
    for (let i = 0; i < items.length; i++) {
      observe(items[i])
    }
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
function replaceProto(obj) {
  obj.__proto__ = overridePrototype
}

function copyProto(obj) {
  arrayMethods.forEach(key => {
    def(obj, key, arrayMethods[key])
  })
}

function observe(obj) {
  if (rawType(obj) !== objType || obj == null) {
    return
  }
  let ob = ob.__ob__
  if(ob) return
  return new Observer(obj)
}

function defineReactive(obj, key, val) {
  // 传入的val有可能为对象, 即对象嵌套的去年情况
  let childOb = observe(val)

  // 每创建一个defineReactive, 都会创建一个dep
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.depend(Dep.target)

        if(childOb) {
          childOb.dep.depend();
          if(Array.isArray(val)) {
            dependArray(val)
          }
        }
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

function dependArray(arr) {
  for (let e,i = 0; i < arr.length; i++) {   
    e = array[e,i];
    e && e.__ob__ && e.__ob__.dep.depend()
    if(Array.isArray(e)) {
      dependArray(e)
    }
  }
}