const express = require('express');
const router = express.Router();
const Review = require('../model/review');
const Product = require('../model/product')

router.post('/products/:productId/review',async(req,res)=>{
    console.log('ok');

    const {productId} = req.params;
    const {rating,comment} = req.body;
    const newReview = await Review.create({rating,comment});

    const product = await Product.findById(productId)
    product.reviews.push(newReview);
    product.save();

    res.redirect('back')
})

module.exports = router;