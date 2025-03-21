const express = require('express');
const router = express.Router();
const Product = require('../model/product')

router.get('/products',async(req,res)=>{
    const products = await Product.find({});
    res.render('product/index',{products})
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    let product = await Product.findById(id);
    res.render('product/show',{product})
})

module.exports = router;