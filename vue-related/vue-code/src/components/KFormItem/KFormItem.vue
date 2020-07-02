<template>
  <div class="k-form-item" :class="{'is-error': error}">
    <div class="k-form-item__label">{{ label }}</div>
    <div class="k-form-item__content">
      <slot></slot>
      <div v-if="error" class="k-form-item__error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import schema from 'async-validator'
import emitter from '@/mixins/emitter'

export default {
    name: 'KFormItem',
    mixins: [emitter],
    inject: {
      kform: { from: 'kform' },
      // bar: { from: 'foo', default: 'bar' }
    },
    props: {
      prop: {
        type: String
      },
      label: {
        type: String
      }
    },
    mounted () {
      this.$on('k-form-input', this.validate)
    },
    data() {
      return {
        error: ''
      }
    },
    methods: {
      validate() {
        let prop = this.prop
        let value = this.kform.model[prop]
        let rules = this.kform.rules[prop]
        var validator = new schema({ [prop]: rules })
        let validate =  validator.validate({ [prop]: value }, err => {
          if (err) {
            this.error = rules[0].message
          } else {
            this.error = ''
          }
        })
        // 当arguments.length > 0 时，是组件内部的表单元素触发的表单校验，此时需要单独处理下错误情况。 否则为表单触发的校验，返回未处理的promise
        if(arguments.length) {
          return validate.catch(() => {})
        }
        return validate
      }
    },
  }
</script>

<style lang="less" scoped>
@danger-color:  #f56c6c;
.k-form-item {
  display: flex;
  margin-bottom: 22px;
  &__label {
    min-width: 80px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    flex: 1;
    line-height: 40px;
    position: relative;
    font-size: 14px;
    text-align: left;
  }
  &__error {
    color: @danger-color;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>

<style lang="less">
.k-form-item.is-error {
  .k-form-input__inner {
    border-color: #f56c6c;
  }
}
</style>