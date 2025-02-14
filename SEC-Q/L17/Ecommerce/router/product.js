const express = require('express');
const router = express.Router();
const Product = require('../model/product')


router.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product/index',{products})
})

router.get('/product/new',(req,res)=>{
    res.render('product/new')
})

router.post('/products',async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create( {name,image,price,desc});
    res.redirect('/products')
})

module.exports = router;