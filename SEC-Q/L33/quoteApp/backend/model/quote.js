const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author:String,
    quote:String
},{
    timestamps:true
});

const Quote = mongoose.model('Quote',quoteSchema);

module.exports = Quote;