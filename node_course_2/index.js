const logger = require('./logger')
const path = require('path');
const os = require('os');
const fs = require('fs');


// for path
var pathobj= path.parse(__filename)

// for os
var totalmemory = os.totalmem();
var freememory = os.freemem();

console.log(`total memory  ${totalmemory}, free meomry ${freememory} `);

// for filesystem
fs.readdir('./', (err,filles)=>{
    if(err) console.log(err)
    else console.log('result', filles)
})


// EVENT module and send data ata the time when event is occur

// const EventEmitter = require('events');
// var emitter = new EventEmitter();
const Logger = require('./logger');
var logg = new Logger();

logg.on('messagelogged' , (arg)=>{
    console.log('lister called', arg);
})

logg.log('hekkelks')


// http request
const http = require('http');

const server= http.createServer();

server.on('connection' , ()=>{
    console.log('new connection')
})

server.listen(3000)
