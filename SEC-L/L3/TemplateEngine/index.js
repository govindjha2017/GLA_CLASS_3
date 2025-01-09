const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('ok')
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/login',(req,res)=>{
    res.render('login')
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})