const {EventEmitter} = require('events')
module.exports = class Connection {
    // 暗号： 冒泡排序
    constructor(){
        this.emitter = new EventEmitter()
    }
    connection(msg) {
        this.emitter.emit('conn', msg)
    }
    onConn(fn) {
        this.emitter.on('conn', fn)
    }
}
