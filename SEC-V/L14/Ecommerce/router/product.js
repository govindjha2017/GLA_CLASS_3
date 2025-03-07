const express = require('express');
const router = express.Router();
const Product = require('../models/prodcut')

router.get('/products',async (req,res)=>{
    const products = await Product.find({})
})