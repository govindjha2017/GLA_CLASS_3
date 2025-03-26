const express = require('express');
const app = express();
const User = require('./model/user');
const session = require('express-session');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authSEC-L')
  .then(() => console.log('Connected!'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))

let isLogedin = (req,res,next)=>{
    let user = req.session.user_id;
    if(user){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.get('/',isLogedin,(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',async (req,res)=>{
    const {username,password,email} = req.body;
    const user = await User.findOne({username});
    console.log(user)
    if(user){
        res.redirect('/signup')
      
    }
    else{
        await User.create({username,password,email});
        res.redirect('/login')
    }
  
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(user.password===password){
        req.session.user_id= username;
        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})