const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json())

let todos = ['game','music','dance','coding']

app.get('/todos',(req,res)=>{
    res.json({todos})
})

let x = [
    {
        name:'GLA University',
        city:'Mathura',
        domain:'glauniversity.in'
    },
    {
        name:'GLA University',
        city:'Mathura',
        domain:'glauniversity.in'
    },
    {
        name:'GLA University',
        city:'Mathura',
        domain:'glauniversity.in'
    }
]

app.get('/university',(req,res)=>{
    res.json({x})
})


app.post('/abc',(req,res)=>{
    console.log(req.body);
    todos.push(req.body.data);
    res.send('ok')
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})