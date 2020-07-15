<template>
  <div>
    ItemPage: path param: {{ $route.params.id }}
    <p>store.state.foo.count: {{ $store.state.foo.count }}</p>
    <p>store.state.items: {{ $store.state.items }}</p>
    <button @click="handleClick">Button</button>
  </div>
</template>

<script>
import fooStoreModule from '../store/modules/foo';
  export default {
    asyncData({ route, store }) {
      store.registerModule('foo', fooStoreModule)
      store.dispatch('inc')
      return store.dispatch('fetchItem', route.params.id)
    },
    mounted () {
      console.log('this.$store :>> ', this.$store);;
    },
    methods: {
      handleClick() {
        console.log('this.$store :>> ', this.$store);
      }
    },
    /**
     *  当多次访问路由时, 
     *  避免在客户端重复注册模块
     */
    destroyed() {
      this.$store.unregisterModule('foo')
    },
  }
</script>

<style lang="scss" scoped>

</style>