const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/E-COM-SECL')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB not conected')
    })

const Product = require('./model/product');

app.get('/products',async (req,res)=>{
     let products = await Product.find({})

     res.render('product/index',{products})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})