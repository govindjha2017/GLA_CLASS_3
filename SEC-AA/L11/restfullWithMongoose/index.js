const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product');


app.set('view engine','ejs')

mongoose.connect('mongodb://127.0.0.1:27017/SEC-AA-Restfull')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected')})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product',{products})
})


app.listen(4000)