const express = require('express');
const app = express();

app.get('/',(req,res)=>{
   res.send('This is home page')
})

app.get('/cat',(req,res)=>{
    res.send('Mewwww')
})

app.get('/cat',(req,res)=>{
    res.send('Mewwww part2')
})

app.get('/login',(req,res)=>{
    res.send('this is login page')
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
        name:'kgf',
        rating:9,
        language:'Hindi'
    },
    {
        name:'spiderman',
        rating:7,
        language:'English'
    },
    {
        name:'animal',
        rating:8,
        language:'hindi'
    },
]

app.get('/getData',(req,res)=>{
    console.log(req.query);
    // let name = req.query.name
    let {name} = req.query;
    console.log(name);
    let data = Movies.find((movie)=>movie.name==name)

    console.log(data);
    res.json(data)
})


// app.get('/*',(req,res)=>{
//     res.send('404 page not found')
// })

app.listen(4000,()=>{
    console.log('server run at port 4000')
});