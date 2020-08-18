let KVue

class Store {
  constructor(options) {
    // 保存mutations
    this._mutations = options.mutations
    this._actions = options.actions
    this._getters = options.getters

    // 绑定this到store实例
    const store = this
    const { commit, dispatch } = store

    this.commit = function boundCommit(type, payload) {
      commit.call(store, type, payload)
    }

    this.dispatch = function boundDispatch(type, payload) {
      dispatch.call(store, type, payload)
    }

    /**
     * 1. 遍历用户传入getterts所有的key ，动态赋值， 其值应该为函数执行结果
     * 2. 确保它是响应式的
     * 3. 缓存结果， 利用computed
     */
    // 暗号: 天王盖地虎
    let computedGetters = Object.create(null)
    Object.keys(this._getters).forEach(type => {
      Object.defineProperty(computedGetters, type, {
        get: function() {
           return store._getters[type](store.state)
        }
      })
    })
      
    // 响应式的state
    this._vm = new KVue({
      data: {
        $$state: options.state
      },
      computed: {
        getters () {
          return computedGetters
        }
      },
    })
  }

  get getters () {
    return this._vm.getters
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(val) {
    console.error('please user replaceSate to reset state!');
  }

  commit(type, payload) {
    // 根据type 获取 mutaion
    const entry = this._mutations[type]

    if(!entry) {
      return console.warn('unkonw commit', type)
    }
    entry(this.state, payload)
  }

  dispatch(type, payload) {
    // 根据type 获取 action
    const entry = this._actions[type]

    if(!entry) {
      return console.warn('unknow action type', type)
    }

    entry(this, payload)
  }
}

function install (Vue) {
  KVue = Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

// 到处对象可以理解为Vuex
export default { Store, install }