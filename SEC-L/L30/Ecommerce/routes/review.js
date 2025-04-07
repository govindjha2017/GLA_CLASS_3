const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const Review = require('../model/review');

router.post('/products/:productId/review',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);

    const {rating,comment} = req.body;
    const newReview = await Review.create({rating,comment});

    product.reviews.push(newReview);

    product.save()

 res.redirect('back')
})

module.exports = router;