<template>
  <div class="k-notice">
    <transition-group 
      name="k-notice__list"
      tag="ul"
    >
      <li 
        class="k-notice__item"
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
  duration: 5000,
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
      dynamicClsMap () {
        const prefix = 'k-notice__item--'
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
      }
  }
}
</script>

<style lang="less" scoped>
.k-notice {
  position: fixed;
  width: 100%;
  top: 0;
  &__item {
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
    // transition: opacity .3s, transform .4s, top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: block;
    align-items: center;
    &--success {
      background-color: #67C23A;
    }
    &--error {
      background-color: #F56C6C;
    }
  }
}

.k-notice__item {
  transition: all .4s;
  display: block;
}
.k-notice__list-enter, .k-notice__list-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.k-notice__list-active {
  position: fixed;
}
// 元素数量没变化,  使用该属性可以平滑过渡
.k-notice__list-move {
  transition: transform 1s;
}

.margin-top-8px {
  margin-top: 8px;
}
</style>