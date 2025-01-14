const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/abc',(req,res)=>{
    console.log(req.body);
    res.redirect('/about')
})

app.listen(5000,()=>{
    console.log('server run at pirt 5000');
})