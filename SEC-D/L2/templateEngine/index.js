const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/about',(req,res)=>{
     res.render('about')
})

app.get('/project',(req,res)=>{
    res.render('project')
})

let todos = ['coding','music','game','dance'];

app.get('/todos',(req,res)=>{
    res.render('todos',{todos})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})