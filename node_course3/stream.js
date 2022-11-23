const fs = require('fs')

let readstream = fs.createReadStream('./folder/text3.txt', {encoding: 'utf-8'})
let writestream = fs.createWriteStream('./folder/text4.txt', {encoding: 'utf-8'})



// readstream.on('data', (chuck)=>{
//     console.log('................................................. new chuck..........................')
//     console.log(chuck)
//     writestream.write('\n.......................................new chuck........................................\n ')
//     writestream.write(chuck)
// })


// piping

readstream.pipe(writestream)