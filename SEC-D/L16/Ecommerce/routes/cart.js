const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Product = require('../model/product')

router.get('/users/cart/add/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product =  await Product.findById(productId)

    const userId = req.user._id;
    const user = await User.findById(userId);
     let index =-1;
    let obj = user.cart.find((item,ind)=>{
        console.log(item)
        if(item.productId==productId){
            console.log("ok")
            index=ind;
            return item
        }
    })

    if(obj){
        user.cart[index].qauntity +=1;
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
    res.render('cart/index',{cart:user.cart})
})

router.get('/users/cart/remove/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product =  await Product.findById(productId)

    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index = -1;
    let x = user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return item;
        }
    })

    if(x){
        if(user.cart[index].qauntity>1){
            console.log("hello ji")
            user.cart[index].qauntity -=1;
        }
        else{
            user.cart.splice(index,1)
        }
    }

    await user.save();

    res.redirect('back')

})

module.exports = router;