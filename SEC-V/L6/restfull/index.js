const express = require('express');
const app = express();
const Users = require('./data/user');

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/users',(req,res)=>{
    res.render('index',{Users})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})