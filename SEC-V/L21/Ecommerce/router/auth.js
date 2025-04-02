const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.post('/signup', async(req,res)=>{
    const {username,password,email,role} = req.body;

    const user = new User({username,email,role});

    const newUser = await User.register(user,password);

    newUser.save();

    res.redirect('/login')

})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/products');
    });

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/products');
    });
    });

module.exports = router;