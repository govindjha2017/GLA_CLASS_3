const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    desc:{
        type:String,
        trim:true,
        required:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;