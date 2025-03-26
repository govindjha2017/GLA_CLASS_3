const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const productscheama = require('../joiSChema')

let validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body;
    try {
        const value = await productscheama.validateAsync({name,image,price,desc});
        next()
    }
    catch (err) {
        console.log(err)
    
         res.send(err)
    }
}


router.get('/products',async (req,res)=>{
    let products = await Product.find({})

    res.render('product/index',{products})
})

router.get('/products/new',(req,res)=>{
    res.render('product/new')
})

router.post('/products',validateProduct,async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    res.redirect('/products')
})

router.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product/edit',{product})
})

router.put('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products')
})

router.delete('/products/:id',async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('back')
})

router.get('/product/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product/show',{product})
})

module.exports = router;