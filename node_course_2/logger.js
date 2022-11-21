const EventEmitter = require('events');
var emitter = new EventEmitter();

class Logger extends EventEmitter{
    log(a){
        console.log(a);
        this.emit('messagelogged', {id: 1 ,url:'http//fsdgjkshd.com'})
    }
}

var a = 'httpafjdghgdjda';

module.exports= Logger;

// module.exports.log = log;
// module.exports.a = a;

