import { defineComponent, ref, reactive, watchEffect, watch, isReactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
// 通过直接导入包信息来查看
import store from '../store';

export default defineComponent({
  name: 'About',
  setup() {
    const state = reactive(store.state)
    console.log(isReactive(store.state))
    // console.log(state.title)
    // watch(store.state.title, (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })
    watchEffect(() => {
      console.log(store.state)
    })

    return () => (
      <>
        console.log(arguments)
        <h3>About Page 二级导航</h3>
        state date: {state.title}
        <ul id="nav">
          <li><RouterLink to="/about/info">Info</RouterLink></li>
        </ul>
        <RouterView></RouterView>
      </>
    )
  }
})

