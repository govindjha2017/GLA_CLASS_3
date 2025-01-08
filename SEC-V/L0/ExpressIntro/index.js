const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Working fine')
})
app.get('/about',(req,res)=>{
    res.send('this is about page')
})

app.get('/login',(req,res)=>{
    res.send('this is login page')
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})
app.listen(4000);