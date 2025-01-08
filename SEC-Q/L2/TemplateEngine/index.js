const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(3000,()=>{
    console.log('server run at port 3000')
})