const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send('ok');
})

app.listen(4000,()=>{
    console.log('server run at prt 4000');
})