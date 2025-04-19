const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/quoteAppSec-v')
  .then(() => console.log('Connected!'));

/// ROUTES

const QuoteRoutes = require('./routes/quote');
app.use(QuoteRoutes)

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port 5000')
})