const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.engine('ejs', ejsMate);

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECQ')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB bot conected')
    })

// ======ROUTES

const productRotes = require('./router/product');
app.use(productRotes)

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})