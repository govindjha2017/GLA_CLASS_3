const express = require('express');
const app = express();
var methodOverride = require('method-override')

const Users = require('./data/user')

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
 
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

app.get('/users/:id/edit',(req,res)=>{
    const {id} = req.params;

    let user = Users.find((user)=>user.id==id);
    res.render('edit',{user});
})

app.patch('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=>user.id==id);
    const {username,email,city,password} = req.body;
    user.username = username;
    user.password = password;
    user.email= email;
    user.city = city
   
    res.redirect('/users')
})

app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=>user.id==id);
    let ind = Users.indexOf(user);
    Users.splice(ind,1);
    res.redirect('/users')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})