const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/kuchh',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})