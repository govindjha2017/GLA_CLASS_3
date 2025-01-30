const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

const todos = ['gaming','coding','cricket','football']

app.get('/todos',(req,res)=>{
    res.json(todos)
})

let x = [
    {
       name:'GLA',
       Domain:'https://glauniversity.in' ,
       city:'Mathura'
    },
    {
        name:'GLA',
        Domain:'https://glauniversity.in' ,
        city:'Mathura'
    },
    {
        name:'GLA',
        Domain:'https://glauniversity.in' ,
        city:'Mathura'
    },
]

app.get('/university',(req,res)=>{
    res.json(x);
})

app.listen(5000);