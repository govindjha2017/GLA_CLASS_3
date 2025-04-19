const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quote-sec-Q')
  .then(() => console.log('Connected!'));

/////////ROUTES

const quoteRoutes = require('./routes/quote');
app.use(quoteRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})