const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/about',(req,res)=>{
    res.send('this is about page1')
})

app.get('/about',(req,res)=>{
    res.send('this is about page2')
})

app.get('/project',(req,res)=>{
    res.send(`<h1>this is project page</h1>`)
})

app.get('/login',(req,res)=>{
    res.send('this is login page')
})

app.get('/signup/:a/:password',(req,res)=>{
    console.log(req.params);

    res.send('ok')
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000);