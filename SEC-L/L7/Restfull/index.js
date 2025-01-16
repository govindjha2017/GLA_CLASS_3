const express = require('express');
const app = express();
const Users = require('./data/user');

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/users',(req,res)=>{
    res.render('user',{Users});
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
   const {username,password,email,city} = req.body;
   let user = {name:username,password,email,city};
   console.log(user);
   Users.push(user)
   res.redirect('/users')
})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})