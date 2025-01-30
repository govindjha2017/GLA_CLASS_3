const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/Sec-Q-Restfull')
    .then(()=>{console.log('DB conetced!')})
    .catch(()=>{console.log('DB not conected!')})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product',{products})
})

app.get('/product/new',(req,res)=>{
    res.render('new')
})

app.post('/products',async (req,res)=>{
    const {name , image , price , desc} = req.body;
    await Product.create({name , image , price , desc});

    res.redirect('/products')
})

app.get('/product/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('show',{product})
})

app.listen(4000,()=>{
    console.log('server runat port 4000')
})