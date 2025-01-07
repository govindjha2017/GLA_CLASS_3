const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Working fine!')
})

app.get('/about',(req,res)=>{
    res.send(`<h1>This is about page</h1>`)
})

app.get('/project',(req,res)=>{
    res.send(`<h1>This is project page</h1>`)
})

app.get('/*',(req,res)=>{
    res.send(`404 page not found`)
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
});