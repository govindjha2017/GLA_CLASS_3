const express = require('express');
const app= express();
const Product = require('./model/product');
const path = require('path');
const ejsMate = require('ejs-mate');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./model/user')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECD')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ========ROUTES
const productRoutes = require('./routes/product');
app.use(productRoutes);

const reviewRoutes = require('./routes/review');
app.use(reviewRoutes);

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})