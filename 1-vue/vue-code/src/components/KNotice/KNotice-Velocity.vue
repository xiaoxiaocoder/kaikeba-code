<template>
  <div class="k-notice__wrapper" :class="typeCls">
    <transition-group 
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li class="k-notice"
        v-for="item, index in notices" 
        :class="[dynamicClsMap[item.type], index > 0 ? 'margin-top-8px': '']"
        :key="item.id"
        >
        <span v-if="item.closeable">closeable</span>
        {{item.id}}   {{ item.message }}
      </li>
    </transition-group>
  </div>
</template>

<script>
const defconf = {
  type: 'default',
  duration: 3000,
  closeable: false,
  message: '',
}
let nid=0
  export default {
    name: 'KNotice',
    data() {
      return {
        notices: []
      }
    },
    computed: {
      typeCls() {
        const type = this.type
        return {
          'k-notice--default': type === 'default',
          'k-notice--success': type === 'success',
          'k-notice--error': type === 'error',
        }
      },
      dynamicClsMap () {
        const prefix = 'k-notice--'
        const map = {};
        ['default', 'success', 'error'].forEach(type => (map[type] = `${prefix}${type}`))
        return map
      }

    },
    methods: {
      add(props) {
        let uid = `k-notice-${nid++}`
        let notice = Object.assign({}, defconf, props, {id: uid});
        
        const { message, duration } = notice
        if(!message){
          return console.error('传入的消息体内容为空')
        }

        let notices = this.notices
        if(duration) {
          let timmer = setTimeout(() => {
            clearTimeout(timmer)
            notices.splice(notices.indexOf(notice), 1)
          }, duration)
        }
        notices.push(notice)
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1 },
            { complete: done }
          )
        }, delay)
      },
      leave: function (el, done) {
        // console.log('leave', el)
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
      }
  }
}
</script>

<style lang="less" scoped>
.k-notice__wrapper {
  position: fixed;
  width: 100%;
  top: 0;
}
.k-notice {
    position: relative;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    min-width: 380px;
    max-width: 50%;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #edf2fc;
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
.margin-top-8px {
  margin-top: 8px;
}
</style>