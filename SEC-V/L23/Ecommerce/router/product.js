const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('index',{products})
})

router.get('/product/new',(req,res)=>{
    res.render('new')
})

router.post('/products',async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc})
    res.redirect('/products')
})

router.post('/products/:id/delete',async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('back')
})

router.get('/product/edit/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('edit',{product})
})

router.post('/products/edit/:id',async(req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products')
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('show',{product})
})

module.exports = router;