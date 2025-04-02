const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const User = require('../model/user');

router.get('/user/cart/add/:productId',async (req,res)=>{
    const {productIId} = req.params;
    const product = await Product.findById(productIId);

    

})

module.exports = router;