const express =require('express');
// middleware
const morgan =require('morgan');

let app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'ejs_view')

app.listen(3000);

// app.use((req, res, next)=>{
//     console.log('new request is made');
//     console.log('host name', req.hostname);
//     console.log('path', req.path);
//     console.log('method', req.method);
//     next();
// })

// middeleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/' , (req, res)=>{
   // res.send('<p> hello brother </p>')
   let blogs=[
    {title:'i am blog 1', snippet:'i am snippet one'}, 
   {title:'i am blog 2', snippet:'i am snippet two'}, 
   {title:'i am blog 3', snippet:'i am snippet three'},
   ];

    res.render('index', {title: 'blog', blogs:blogs});
})

app.get('/about' , (req, res)=>{
    //res.send('<p> aur bai hello brother </p>')
    res.render('about', {title: 'blog'});
})


app.get('/blog/create' , (req, res)=>{
    //res.send('<p> aur bai hello brother </p>')
    res.render('create', {title: 'blog-cretae'});
})


// redirect 
app.get('/about-us' , (req, res)=>{
    res.redirect('/about');
})

// 404 not found
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'})
})

