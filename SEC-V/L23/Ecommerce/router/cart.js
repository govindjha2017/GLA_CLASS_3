const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('/users/cart/add/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);
    
})

module.exports = router;