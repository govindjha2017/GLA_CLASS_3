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
        if(item?._id==productId){
            console.log("ok")
            index=ind;
            return item
        }
    })

    if(obj){
        user.cart[index].qauntity +=1;
    }
    else{
        user.cart.push(productId)
    }
    
    await user.save();

    res.redirect('back')
})

module.exports = router;