const http = require('http')
const fs = require('fs')
const lo = require('lodash')


let server = http.createServer((req,res)=>{
    // console.log(req.url, req.method)

    // lodash
    let num =lo.random(0,20);
    console.log(num)

    // once
    let greet = lo.once(()=>{
        console.log('greet')
    })
    greet()
    greet()
    // set header type
    res.setHeader('content-Type',  'text/html');

    // res.write('<h1>hello from tahawar</h1>')
    // res.write('<h1>hello from tahawar</h1>')
    // res.write('<h1>hello from tahawar</h1>')
    // res.end();

    let path= './'
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break; 
        default:
            path+= '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data);
        }
    })
})

server.listen(3000, 'localhost',(err)=>{
    console.log('server is listing')
}) 