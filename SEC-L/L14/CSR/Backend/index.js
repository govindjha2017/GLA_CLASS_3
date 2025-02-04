const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

let datas = ['coding','Music','Dance','Cricket']

app.get('/todos',(req,res)=>{
    res.json({datas});
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
    },
]
app.get('/university',(req,res)=>{
    res.json({datas:x})
})


app.listen(4000,()=>{
    console.log('server run at port 4000');
})