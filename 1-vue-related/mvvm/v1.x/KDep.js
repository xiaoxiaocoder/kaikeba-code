let depId = 1;
function Dep() {
  this.subs = []
  this.depId = depId++;

}

Dep.prototype = {
  depend(watcher) {
    watcher.addDep(this)
  },
  notify(){
    this.subs.forEach(sub => sub.update())
  },
  add(watcher) {
    this.subs.push(watcher)
  }
}

Dep.target = null