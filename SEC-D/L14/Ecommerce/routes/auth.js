const express = require('express');
const router = express.Router();
const User = require('../model/user');
const passport = require('passport')

router.get('/signup',(req,res)=>{
    res.render('auth/signup')
})

router.post('/signup',async (req,res)=>{
    const {username,password,email,role} = req.body;
    let user = new User({username,email,role} )
    let newUser = await User.register(user,password);

    await newUser.save()
    res.redirect('/login')
})

router.get('/login',(req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/products');
    });

module.exports = router;