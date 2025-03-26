const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./model/user')

mongoose.connect('mongodb://127.0.0.1:27017/authSec-AA')
  .then(() => console.log('Connected!'));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true 
  }))


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup',async (req,res)=>{
    const {username,password,email} = req.body;
    let user = await User.findOne({username});
    if(!user){
       await User.create({username,password,email});
       res.redirect('/login')
    }
    else{
        res.redirect('/signup')
    }

})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})