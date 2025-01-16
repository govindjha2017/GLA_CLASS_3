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

    let id = Users[Users.length-1].id +1;

    const user = {id,username,password,city,email};
    Users.push(user);
    res.redirect('/users');
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;

    let user = Users.find((user)=>user.id==id);
    res.render('show',{user});
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})