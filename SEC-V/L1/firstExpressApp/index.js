const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/about',(req,res)=>{
    res.send('this is about PAGE')
})

app.get('/project',(req,res)=>{
    res.send("this is project page")
})

app.get('/signup/:username/:password',(req,res)=>{
    console.log(req.params);
    res.send('ok')
})


app.listen(5000,()=>{
    console.log('server run at port 5000')
})