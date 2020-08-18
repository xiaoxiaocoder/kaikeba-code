

function Vue(options) {
  this.$options = options
  const data = options.data
  if (typeof data === 'function') {
    this.$data = new Observer(this, data())
  } else {
    this.$data = new Observer(this, data)
  }
  proxyProperty(this, '$data')

  this.$methods = options.methods || {}

  // 将页面引用转化为watcher
  new Compile(options.el, this)

  return this;
}

const K_MODEL_DIR = 'k-model'
const K_BIND_DIR = 'k-bind'

function Compile(el, vm) {
  this.$vm = vm,
  this.$el = document.querySelector(el)

  if (this.$el) {
    this.compile(this.$el)
  }
}

/**
 * 递归遍历el, 判断其类型
 */
Compile.prototype = {
  compile (el) {
    el.childNodes.forEach(node => {
      if (this.isElement(node)) {
      // console.log('编译元素', node.nodeName)
        this.compileElement(node, this.$vm)
      } else if (this.isInter(node)) {
        // console.log('编译插值表达式', node.textContent);
        this.compileText(node, this.$vm)
      }

      if(node.childNodes) {
        this.compile(node)
      }
    })
  },
  compileElement(node, vm) {
    // 优先检测是否包含v-model指令, 当检测到v-model指令时,将其替换成k-bind:value和k-on:update格式
    // const nodeAttrNames = node.getAttributeNames() || []
    // if (nodeAttrNames.indexOf(K_MODEL_DIR)  >= 0) {
    //   const kModelExp = node.getAttribute(K_MODEL_DIR)
    //   node.removeAttribute(K_MODEL_DIR)
    //   node.setAttribute('k-bind:value', kModelExp)
    //   node.setAttribute('k-on:input', `${kModelExp} = $event.target.value`)
    //   this.compileElement(node, vm)
    // }
    // 获取节点属性
    const nodeAttrs = Array.from(node.attributes)
    nodeAttrs.forEach((attr, index) => {
      // k-xxx="exp"
      const attrName = attr.name
        .replace(/^@/, 'k-on:')
        .replace(/^:/, 'k-bind:')
      const exp = attr.value // exp
      // 暗号: 冬瓜冬瓜我是西瓜
      // 判断属性类型
      // if(this.isEventBinding(attrName)) { // 事件绑定
      //   this.bindEvent(node, attrName, exp)          
      // } 
      // else if (attrName.startsWith('k-bind:') || attrName.startsWith(':') ) {
      //   this.compileKBind(node, attrName, exp)
      // } 
      if (this.isDirective(attrName)) { // 指定绑定

        // const dir = attrName.substring(2)
        // v-html, v-text v-bind:prop v-on:click v-on:click.stop.prevent
        ///(?:k-(\w+):?)(?<dir>[^.]+)?(?:[.]([^.]+))+/.exec('k-on:click.stop.prevent')
        const match = attrName.match(/(?:k-(?<dir>\w+))(?:[:](?<def>\w+))?(?:[.](\w+))*/)
        let dir = null
        let def = ''
        let modifier = []
        if (match && match.groups) { // v-text, v-html
          let groups = match.groups
          dir = groups.dir
          def = groups.def
          // TODO: 正则匹配modifiers
          let dotIndex = attrName.indexOf('.')
          if (dotIndex > 0) {
            modifier = attrName.slice(dotIndex + 1).split('.')
            // console.log(modifier)
          }
        }
        // 执行指令
        this[dir] && this[dir](node, exp, def, modifier)
      }
    })
  },
  // v-bin:def="exp"
  bind(node, exp, def) {
    // const dir = attrName.startsWith('k-bind:') ? attrName.slice(8) : attrName.slice(1);
    this.update(node, exp, 'bind', def);
  },
  bindUpdater(node, value, def) {
    node[def] = value
  },
  valueUpdater(node, value) {
    node.value = value
  },
  compileText(node, vm) {
    const text = node.textContent.match(/\{\{(.*)\}\}/)
    const expression = text[1]
    // // 获取匹配表达式
    // node.textContent = vm[expression.trim()]
    this.update(node, expression, 'text')
  }, 
  text (node, exp) {
    this.update(node, exp, 'text')
  },
  textUpdater(node, value) {
    node.textContent = value
  },
  html (node, exp) {
    this.update(node, exp, 'html')
  },
  htmlUpdater (node, value) {
    node.innerHTML = value
  },
  model (node, exp) {
    this.update(node, exp, 'model')
    // 源码中事件绑定逻辑 src/platforms/web/runtime/directives/model.js
    const nodeType = node.type
    // 下拉组件
    if('select' === nodeType) {
      node.addEventListener('select', e => (this.$vm[exp] = e.target.value))
    } else if ('radio' === nodeType) {
      // console.log('nodeType', node)
    } else { // textarea,text, number, email, url ...
      node.addEventListener('input', (e) => (this.$vm[exp] = e.target.value))
    }
  },
  modelUpdater(node, value) {
    node.value = value;
  },
  on (node, exp, eventName, modifier) {
    // 判断是否带有(, 右括号默认为带有传参的方法
    const bracket = exp.indexOf('(')
    let args = []
    let evt = this.$vm.$options.methods[exp]
    if (bracket > 0) {
      args = exp.slice(bracket + 1, -1).split(',');
      evt = this.$vm.$methods[exp.slice(0, bracket)]
    } else {
      // 判断是否是表达式
      if(exp.indexOf('=') > 0) {
        evt = () => {
          with(this.$vm) { eval(exp) }; 
        }
      }
    }
    if(evt) {
      node.addEventListener(eventName, (e) => {
        evt.apply(this.$vm, this.resolveEventArgs(this.$vm, args, e))
      })
    }
  },
  resolveEventArgs(vm, args, e) {
    return args.map((val, index, arr) => {
      if (typeof val === 'string' && !/'|"/.test(val)) {
        val = val.trim()
        if (val === '$event') {
          return e; // window.event
        } 
        val = vm[val]
        if (!val) {
          return console.error(`not fond key ${val} in $vm`)
        }
        return val
      }
      return val
    })
  },
  // 动态绑定都需要创建更新函数以及对应watcher实例
  update(node, exp, dir, def) {
    // 初始化
    exp = exp.trim()
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp], def)

    return new Watcher(this.$vm, exp, function(key, val){
      fn & fn(node, val, def)
    })
  },
  isElement (node) {
    return node.nodeType === 1
  },
  isInter(node) {
    return node.nodeType === 3 && /\{\{.*\}\}/.test(node.textContent)
  },
  isDirective(attrName) {
    return attrName.startsWith('k-')
  },
  isEventBinding(attrName) {
    return attrName.startsWith('k-on') || attrName.startsWith('@')
  }
}

