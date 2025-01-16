const express = require('express');
const app = express();

const path = require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/about',(req,res)=>{
     res.render('about')
})

let todos = ['game','code','cricket']

app.get('/project',(req,res)=>{
    res.render('project')
})

app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})