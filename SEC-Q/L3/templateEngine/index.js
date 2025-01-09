const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
   res.render('home')
})

let todos = ['gaming','coding','music','dance','cricket'];

app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})

app.get('/login',(req,res)=>{
    res.render('login')
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at',PORT );
})