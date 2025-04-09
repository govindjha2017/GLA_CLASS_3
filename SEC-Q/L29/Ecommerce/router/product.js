const express = require('express');
const router = express.Router();
const Product = require('../model/product')
const productSchema = require('../joiSchema')

let validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body;
    try {
        const value = await productSchema.validateAsync({name,image,price,desc});
        next()
    }
    catch (err) { 
        console.log(err)
        res.send(err)
    }
}

router.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product/index',{products})
})

router.get('/product/new',(req,res)=>{
    res.render('product/new')
})

router.post('/products',validateProduct,async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create( {name,image,price,desc});
    res.redirect('/products')
})

router.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('product/edit',{product})
})

router.put('/products/:id',validateProduct,async(req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products')
})

router.delete('/product/:id',async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('back')
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('product/show',{product})
})

module.exports = router;