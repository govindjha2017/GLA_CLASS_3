const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    desc:{
        type:String,
        required:true,
        trim:true
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;