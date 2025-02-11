const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('./model/product');
const Product = require('./model/product');
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
const ejsMate = require('ejs-mate');
app.engine('ejs',ejsMate);

mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECAA')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB not conected')
    })

app.get('/products',async (req,res)=>{
    let products = await Product.find({});

    res.render('products/index',{products})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})