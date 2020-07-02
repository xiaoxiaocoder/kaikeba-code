<template>
  <div>
    <strong>slot scope</strong>
    <slot name="user" :user="user">user</slot>
    <slot :user="user" :address="address">
      {{user}}
    </slot>
    <slot name="address" :address="address">......</slot>
    <slot name="footer">footer</slot>
  </div>
</template>

<script>
  export default {
    name: 'KUser',
    props: ['name', 'age', 'address'],
    computed: {
      user() {
        return {
          name: this.name,
          age: this.age
        } 
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>