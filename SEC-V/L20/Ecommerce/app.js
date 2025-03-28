const express = require('express');
const app = express();
const path = require('path')
app.set('view engine','ejs')

const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect('mongodb://127.0.0.1:27017/ECOM-SEC-V')
    .then(()=>{console.log('DB conected ')})
    .catch(()=>{console.log('DB not conected')})

// =====ROUTES

const productRoutes = require('./router/product');
app.use(productRoutes);

const reviewRoutes = require('./router/review');
app.use(reviewRoutes)

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT)
})