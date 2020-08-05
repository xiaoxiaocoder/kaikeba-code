export default {
  // 全局state上的key
  namespace: 'products',
  // 初始值
  state: [],
  // 等同于redux里的reducers, 接收actin, 同步更新state
  reducers: {
    delete(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}
