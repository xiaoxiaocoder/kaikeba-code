export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      if(parent &&(!name || name !== componentName)) {
        parent = parent.$parent
        if(parent) {
          name = parent.$options.name
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast: function _broadcast(componentName, eventName, params){
      this.$children.forEach(child => {
        let name = child.$options.name

        if(name === componentName) {
          child.$emit(child, [eventName].concat(params))
        } else {
          _broadcast.apply(child, [componentName, eventName, params])
        }
      })
    }
  }
}