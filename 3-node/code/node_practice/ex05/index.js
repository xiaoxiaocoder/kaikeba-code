const {EventEmitter} = require('events')
module.exports = class Connection {
    // 暗号： 冒泡排序
    constructor(){
        this.emitter = new EventEmitter()
        this.stack = []
        this.emitter.on('conn', msg => {
            this.stack.forEach(fn => fn(msg))
        })
    }
    connection(msg) {
        this.emitter.emit('conn', msg)
    }
    onConn(fn) {
        this.stack.push(fn)
    }
}
