const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user')

router.get('/users/cart/add/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);

    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index = -1;
    let x = user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return item
        }
    })
    if(x){
        user.cart[index].quantity +=1;
    }
    else{
        user.cart.push({productId})
    }

    await user.save();

    res.redirect('back')
})

router.get('/users/cart',async (req,res)=>{
    
    const userId = req.user?._id;
    const user = await User.findById(userId).populate('cart.productId');

    res.render('cart',{cart:user.cart})

})

module.exports = router;