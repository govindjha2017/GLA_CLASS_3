const mongoose = require('mongoose');

const productSchma = new mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    image:String
})

const Product = mongoose.model('Product',productSchma);


module.exports = Product;