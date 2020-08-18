class Watcher {
  /**
   * vm: 组件实例
   * key: 要访问的key
   * expOrFn: 更新函数
   */
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn
    this.deps = [];
    this.depIds = [];

    this.get()

    return this.value
  }

  get() {
    Dep.target = this
    this.value = this.vm[this.key]
    Dep.target = null;
  }

  addDep(dep) {
    if(!this.depIds.includes(dep.depId)) {
      this.depIds.push(dep.depId)
      this.deps.push(dep)
      dep.add(this)
    }
  }
  /**
   * 更新函数
   */
  update() {
    // 传入当前的最新的值给更新函数
    this.updateFn.call(this.vm, this.key, this.vm[this.key])
  }
}