<template>
  <div>
    AboutView111

    <p @click="$store.commit('add')">count: {{ $store.state.count }}</p>
    <p @click="$store.dispatch('add')">async count: {{ $store.state.count }}</p>
    <!-- <p @click="show = !show">doubleCount: {{ $store.getters }}</p> -->
    <!-- <p v-if="show">doubleCount from computed: {{ $store.getters.doubleCount }}</p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    mounted () {
      console.log(this.$store);;
    },
  }
</script>

<style lang="scss" scoped>

</style>