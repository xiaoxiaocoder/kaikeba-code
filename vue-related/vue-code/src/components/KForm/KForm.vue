<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { findComponentsDownward } from '@/utils/assits';
  export default {
    name: 'KForm',
    provide () {
      return {
        // foo:'foo',
        kform: this
      }
    },
    props: {
      model: {
        type: Object
      },
      rules: {
        type: [Object]
      }
    },
    methods: {
      validate(cb) {
        let formItemsValidates = findComponentsDownward(this, 'KFormItem')
          .filter(c => c.prop)
          .map(c => c.validate())

        Promise.all(formItemsValidates)
          .then(() => cb(true))
          .catch(err => { cb(false, err)})
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>