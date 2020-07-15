<template>
  <div>
    Home Page. store.state.count: {{ $store.state.count }}
    <button @click="handleClick">Button</button>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log('this.$store :>> ', this.$store);;
    },
    methods: {
      handleClick() {
        console.log('this.$store :>> ', this.$store);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>