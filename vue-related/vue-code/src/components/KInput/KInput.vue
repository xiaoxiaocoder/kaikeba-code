<template>
  <div class="k-form-input">
    <input 
    class="k-form-input__inner"
    :type="type"
    v-bind="$attrs"
    @input="onInput"
    @blur="dispatchInputEvents"
    />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

  export default {
    name: 'KInput',
    mixins: [emitter],
    inheritAttrs: false,
    props: {
      value: {
        type: [String]
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      onInput($event) {
        this.$emit('input', $event.target.value)
        this.dispatchInputEvents()
      },
      dispatchInputEvents() {
        this.dispatch('KFormItem', 'k-form-input', [this.value])
      }
    },
  }
</script>

<style lang="less" scoped>
.k-form-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
}
</style>