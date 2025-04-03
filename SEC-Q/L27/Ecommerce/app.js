const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./model/user');

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.engine('ejs', ejsMate);

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECQ')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB bot conected')
    })

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
    
// ======ROUTES

app.use((req,res,next)=>{
    res.locals.currUser = req.user;
    console.log(req.user)
    next();
})

const productRotes = require('./router/product');
app.use(productRotes)

const reviewRoutes = require('./router/review')
app.use(reviewRoutes)

const authRoutes = require('./router/auth');
app.use(authRoutes);

const cartRoutes = require('./router/cart');
app.use(cartRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})