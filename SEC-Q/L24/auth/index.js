const express = require('express');
const app = express();
const User = require('./model/user');
const mongoose = require('mongoose');
const session = require('express-session')
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.connect('mongodb://127.0.0.1:27017/authSec-Q')
  .then(() => console.log('Connected!'));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true ,
    cookie:{
        maxAge: 2*60*1000
    }
  }))

let isloggedin = (req,res,next)=>{
    if(req.session.user_id){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.get('/',isloggedin,(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',async (req,res)=>{
    const {username,password,email} = req.body;
    const user = await User.findOne({username});
    if(!user){
        const hashPassword = await bcrypt.hash(password, saltRounds);
        User.create({username,password:hashPassword,email});
        res.redirect('/login')
    }
    else{
        res.redirect('/signup')
    }
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(user){
        let x=0;
        bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            if(result){
                req.session.user_id = username;
                res.redirect('/')
            }
            else{
                res.redirect('/login')
            }
        });
        
    }
    else{
        res.redirect('/signup')
    }
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})