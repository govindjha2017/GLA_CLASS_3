const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ecom-SECV')
    .then(()=>{
        console.log('db conected')
    })
    .catch(()=>{
        console.log('DB not conectd')
    })

const Product = require('./model/product');

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

app.get('/products',async(req,res)=>{
    let products = await Product.find({})
    res.render('product',{products})
})

app.get('/product/new',(req,res)=>{
    res.render('new')
})

app.post('/products',async(req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    res.redirect('/products')
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('edit',{product})
})

app.put('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products')
})

app.delete('/products/:id',async(req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id});
    res.redirect('back')
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('show',{product})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})