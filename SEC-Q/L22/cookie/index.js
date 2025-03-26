const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secret Key'));

app.get('/',(req,res)=>{
    res.send('working fine')
})

// app.get('/store',(req,res)=>{
//     res.cookie('price',10000);

//     res.send('visited store routes')
// })

// app.get('/buyproduct',(req,res)=>{
//     let productPrice = 30000;
//     const {price} = req.cookies;
//     if(price){
//         productPrice-=price;
//         res.send(`product price is ${productPrice}`)
//     }
//     else{
//         res.send('no discount applied')
//     }
// })


app.get('/store',(req,res)=>{
    res.cookie('price',10000,{signed:true});

    res.send('visited store routes')
})

app.get('/buyproduct',(req,res)=>{
    let productPrice = 30000;
    const {price} = req.signedCookies;
    if(price){
        productPrice-=price;
        res.send(`product price is ${productPrice}`)
    }
    else{
        res.send('no discount applied')
    }
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})