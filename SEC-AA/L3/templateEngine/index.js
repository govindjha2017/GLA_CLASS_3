const express =require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('Working fine')
})

app.get('/about',(req,res)=>{
     res.render('about')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

let todos = ['gaming','coding','fullstack','math']

app.get('/todos',(req,res)=>{
    res.render('todos',{todos})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})