const express =require('express');

let app = express();

app.listen(3000);

app.get('/' , (req, res)=>{
   // res.send('<p> hello brother </p>')
    res.sendFile('./clients_and_server/index.html', {root: __dirname})
})

app.get('/about' , (req, res)=>{
    //res.send('<p> aur bai hello brother </p>')
    res.sendFile('./clients_and_server/about.html', {root: __dirname})
})


// redirect 
app.get('/about-us' , (req, res)=>{
    res.redirect('/about');
})

// 404 not found
app.use((req, res)=>{
    res.status(404).sendFile('./clients_and_server/404.html', {root: __dirname})
})
