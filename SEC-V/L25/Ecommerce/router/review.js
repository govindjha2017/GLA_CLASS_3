const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

router.post('/products/review/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);
    const {rating,comment} = req.body;

    let newReview = await Review.create({rating,comment});

    console.log(product);
    console.log(product.reviews)
    product.reviews.push(newReview);
    product.save();

    res.redirect('back')
})

module.exports = router;