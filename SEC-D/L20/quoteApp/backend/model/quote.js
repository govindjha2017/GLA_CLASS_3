const mongoose = require('mongoose');


const quoteSchema = new mongoose.Schema({
    author:String,
    text:String
})

const Quote = mongoose.model('Quote',quoteSchema);

module.exports = Quote;