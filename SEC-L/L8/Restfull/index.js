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
   let id = Users[Users.length-1].id +1;
   let user = {id,name:username,password,email,city};
   console.log(user);
   Users.push(user)
   res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=> user.id==id);

   res.render('show',{user})
})

app.get('/users/:id/edit',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=> user.id==id);
    res.render('edit',{user})
})

app.post('/abc/:id',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=> user.id==id);
    const {name , password,email,city} = req.body;
    user.name = name;
    user.city = city;
    user.email = email;
    user.password = password;

    res.redirect('/users')
})

app.post('/delete/:id',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=> user.id==id);
    let ind = Users.indexOf(user);
    Users.splice(ind,1);
    res.redirect('/users')
})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})