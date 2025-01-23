const express = require('express');
const app = express();

app.set('view engine','ejs');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-L-Restfull')
  .then(() => console.log('DB Connected!'))
  .catch(()=>{console.log('DB not conected')})


const Product = require('./model/Product');

app.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('product',{products})
})



app.listen(4000,()=>{
    console.log('server run at port 4000')
})