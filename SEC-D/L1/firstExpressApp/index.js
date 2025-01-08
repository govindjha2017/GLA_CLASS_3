const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/login',(req,res)=>{
    res.send('login page')
})

app.get('/signup/:username/:password',(req,res)=>{
    console.log(req.params);
    res.send('ok')
})

let Movies = [
    {
        name:'chak de india',
        rating:8,
        langauge:'Hindi'
    },
    {
        name:'animal',
        rating:9,
        langauge:'Hindi'
    },
    {
        name:'avanger',
        rating:6,
        langauge:'English'
    },
    {
        name:'pushpa',
        rating:8,
        langauge:'Hindi'
    },
]

app.get('/getData',(req,res)=>{

    console.log(req.query);
    // let name = req.query.name;
    let {name} = req.query;
    let data = Movies.find((movie)=> movie.name==name);

    res.json(data);
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
});