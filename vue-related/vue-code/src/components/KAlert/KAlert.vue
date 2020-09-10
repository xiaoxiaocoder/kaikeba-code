<template>
  <div class="k-alert" :class="typeCls">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'KAlert',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      message: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        default: 3000
      }
    },
    computed: {
      typeCls() {
        const type = this.type
        return {
          'k-alert--default': type === 'default',
          'k-alert--success': type === 'success',
          'k-alert--error': type === 'error',
        }
      }
    },
    methods: {
      show() {
        document.body.appendChild(this.$el)
        this.timmer = setTimeout(() => {
          document.body.removeChild(this.$el)
        }, this.duration);
      }
    },
    beforeDestroy () {
      clearTimeout(this.timmer);
    },
  }
</script>

<style lang="less" scoped>
.k-alert {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s,top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    &--success {
      background-color: #67C23A;
    }
    &--error {
      background-color: #F56C6C;
    }
}
</style>