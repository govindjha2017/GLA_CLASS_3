const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Working fine!')
})

app.get('/about',(req,res)=>{
    res.send('This is about page1')
})

app.get('/about',(req,res)=>{
    res.send('This is about page2')
})

app.get('/project',(req,res)=>{
    res.send('This is project page')
})

app.get('/signup/:username/:password',(req,res)=>{
    console.log(req.params)
    res.send('ok')
})

let Movies = [
    {
        name:'pushpa',
        rating:8,
        language:'Tamil'
    },
    {
        name:'Don no.1',
        rating:7,
        language:'Hindi'
    },
    {
        name:'avanger',
        rating:9,
        language:'English'
    },
    {
        name:'DDLJ',
        rating:8,
        language:'Hindi'
    },
]

app.get('/getData',(req,res)=>{
    console.log(req.query);
    // let name= req.query.name;
    let {name} = req.query;

    let data = Movies.find((movie)=> movie.name==name)

    res.json(data);
 
})

// app.get('/*',(req,res)=>{
//     res.send('404 page not found')
// })

app.listen(4000);