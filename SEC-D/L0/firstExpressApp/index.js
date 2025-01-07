const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('working fine!')
})
app.get('/about',(req,res)=>{
    res.send(`<h1>this is about page</h1>`)
})

app.get('/project',(req,res)=>{
    res.send(`<h1>this is project page</h1>`)
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000);