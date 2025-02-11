const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-com-SECQ')
    .then(()=>{
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB bot conected')
    })

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})