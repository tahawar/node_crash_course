const fs = require('fs')

                       // reading dattae from file
// fs.readFile('./folder/text.txt', (err, data)=>{
//     if(err){console.log(err)}
//     console.log(data.toString());
// })

// console.log('last line data')



                           // writing on a file
// fs.writeFile('./folder/text.txt', 'hello world' , ()=>{
    
//     console.log('data is written');
// })
// fs.writeFile('./folder/text2.txt', 'hello world' , ()=>{
    
//     console.log('data is written');
// })

                           // directories



// if(!fs.existsSync('./assest')){
//     fs.mkdir('./assest' , (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('directory created')
//     })
// }else{
//     fs.rmdir('./assest' , (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

                                // deleting file

if(fs.existsSync('./folder/deleteme.txt')){
    fs.unlink('./folder/deleteme.txt', ()=>{
        
        console.log('file deletede')
            
    })
}