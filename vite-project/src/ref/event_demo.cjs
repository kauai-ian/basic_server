// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const EventEmitter = require('events')

// create class
class Logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit('message', {id: Date.now(), msg})
    }
}

// eslint-disable-next-line no-undef
module.exports = Logger


