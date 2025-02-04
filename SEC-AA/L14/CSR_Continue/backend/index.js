const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

let todos = ['game','coding','music','dance'];

app.get('/todos',(req,res)=>{
    res.json({todos})
})

app.post('/abc',(req,res)=>{
    
})

app.listen(4000,()=>{
    console.log('Server run at port 4000');
})