const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Product = require('./model/product')

app.set('view engine','ejs')

mongoose.connect('mongodb://127.0.0.1:27017/SEC-D-Restfull')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected!')})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product',{products})
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    // let product = await Product.findOne({_id:id})
    let product = await Product.findById(id);

    res.render('show',{product})
})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})