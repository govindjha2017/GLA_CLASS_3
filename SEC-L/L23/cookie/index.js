const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('thisissecretkey'));


app.get('/',(req,res)=>{
    res.send('working fine')
})

// app.get('/store',(req,res)=>{
//     res.cookie('price',10000);
//     res.send('viited store routes')
// })

// app.get('/buyproduct',(req,res)=>{
//     let productPrice = 30000;
//     let {price} = req.cookies;
//     productPrice = productPrice-price;

//     res.send(`product purchased at price ${productPrice}!`)
// })

app.get('/store',(req,res)=>{
    res.cookie('price',10000,{signed:true});
    res.send('viited store routes')
})

app.get('/buyproduct',(req,res)=>{
    let productPrice = 30000;
    let {price} = req.signedCookies;
    productPrice = productPrice-price;

    res.send(`product purchased at price ${productPrice}!`)
})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})