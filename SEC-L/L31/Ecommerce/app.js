const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./model/user')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/E-COM-SECL')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB not conected')
    })

const Product = require('./model/product');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true 
  }))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    console.log(req.user)
    res.locals.currUser = req.user;
    next()
})

// =========ROUTES

const productRoutes = require('./routes/product');
app.use(productRoutes)

const reviewRoutes = require('./routes/review');
app.use(reviewRoutes)

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const cartRoutes = require('./routes/cart');
app.use(cartRoutes);
 
const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})