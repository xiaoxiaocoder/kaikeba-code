<template>
  <div>
    Info page.
    state date: {{ $store.state.title }}
    <p><button @click="$store.commit('change', new Date())">change store </button></p>
  </div>
</template>

<script>
import { toRefs } from 'vue';
  export default {
    setup(props, context) {
      console.log(props, context)
    },
    created () {
      // console.log('hello');
    },
  }
</script>
