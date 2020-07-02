<template>
  <button class="k-button" :class="typeCls">
    <span><slot/></span>
  </button>
</template>

<script>
  export default {
    name: 'KButton',
    props: {
      type: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      typeCls() {
        return `k-button--${this.type}`
      }
    },
  }
</script>

<style lang="less" scoped>
.k-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &--primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
}
</style>