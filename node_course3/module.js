// let xyz = require('./people')
let {people , count} = require('./people')

// console.log(xyz)
console.log(people)
console.log(count)

const os = require('os')

console.log(os.platform(),os.homedir())