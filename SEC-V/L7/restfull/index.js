const express = require('express');
const app = express();
const Users = require('./data/user');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/users',(req,res)=>{
    res.render('index',{Users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const id = Users[Users.length-1].id+1
    const {username,password,email,city} = req.body;
    let user = {id,username:username,password,email,city};
    Users.push(user);
    res.redirect('/users')
    
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = Users.find((user)=> user.id==id);
    res.render('show',{user})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})