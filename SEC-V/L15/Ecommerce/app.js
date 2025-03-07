const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');

app.set('view engine','ejs')
app.engine('ejs','ejsMate')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ECOM-SEC-V')
    .then(()=>{console.log('DB conected ')})
    .catch(()=>{console.log('DB not conected')})

//////////////ROUTES

const productRoutes = require('./router/product')

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT)
})