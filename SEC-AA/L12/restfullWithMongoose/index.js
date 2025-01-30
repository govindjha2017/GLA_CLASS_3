const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product');
var methodOverride = require('method-override')


app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/SEC-AA-Restfull')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected')})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product',{products})
})

app.get('/product/new',(req,res)=>{
    res.render('new')
})

app.post('/products',async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc})
    res.redirect('/products')
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('show',{product})
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('edit',{product})
})

app.put('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products')
})

app.delete('/products/:id',async (req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id})
    res.redirect('back')
})

app.listen(4000)