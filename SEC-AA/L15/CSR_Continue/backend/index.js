const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

let todos = ['game','coding','music','dance'];

app.get('/todos',(req,res)=>{
    res.json({todos})
})

app.post('/abc',(req,res)=>{
    console.log(req.body);
    todos.push(req.body.data);
    res.send('ok')
})

app.listen(4000,()=>{
    console.log('Server run at port 4000');
})