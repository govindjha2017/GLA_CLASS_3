const express = require('express');
const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('ok')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

let todos = ['game','coding','dance','music'];

app.get('/todos',(req,res)=>{
    res.render('todos',{todos});
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})