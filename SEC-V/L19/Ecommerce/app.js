const express = require('express');
const app = express();

app.set('view engine','ejs')

const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/ECOM-SEC-V')
    .then(()=>{console.log('DB conected ')})
    .catch(()=>{console.log('DB not conected')})

// =====ROUTES

const productRoutes = require('./router/product');
app.use(productRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT)
})