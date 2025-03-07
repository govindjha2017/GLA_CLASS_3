const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('./model/product');
const Product = require('./model/product');
const path = require('path');
const methodOverride = require('method-override')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
const ejsMate = require('ejs-mate');
app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECAA')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB not conected')
    })

// =========== Routes

const productRoutes = require('./router/product');
app.use(productRoutes)

const reviewRoutes = require('./router/review');
app.use(reviewRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})