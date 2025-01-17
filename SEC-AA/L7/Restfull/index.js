const express = require('express');
const app = express();
const Users = require('./data/user');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/users',(req,res)=>{
    res.render('user',{Users})
})

app.get('/user/new',(req,res)=>{
    res.render('new')
})

app.post('/users',(req,res)=>{
    const {username,password,email,city} = req.body;
    let id = Users[Users.length-1].id+1;
    let user = {id,username,password,email,city};
    Users.push(user);
    res.redirect('/users')
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

app.post('/abc/:id',(req,res)=>{
    const {id} = req.params; 
    let user = Users.find((user)=>user.id==id);
    const {username,password,email,city} = req.body;
    user.username = username;
    user.password = password;
    user.city = city;
    user.email = email;

    res.redirect('/users')
})

app.post('/users/:id/delete',(req,res)=>{
    const {id} = req.params;
    let user = Users.find((user)=>user.id==id);
    let ind = Users.indexOf(user);
    Users.splice(ind,1);
    res.redirect('/users')

})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})