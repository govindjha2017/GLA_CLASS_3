const express = require('express');
const app = express();

const Users = require('./data/user')

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/users',(req,res)=>{
    res.render('user',{Users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {username,email,city,password} = req.body;

    const user = {username,password,city,email};
    Users.push(user);
    res.redirect('/users');
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})