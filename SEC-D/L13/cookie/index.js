const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secret key'));

app.get('/',(req,res)=>{
    res.send('working fine!')
})

app.get('/setcookie',(req,res)=>{
    res.cookie('price',10000);
    res.send('cookie set')
})

// app.get('/store',(req,res)=>{
//     res.cookie('discount',10000);
//     res.send('visted store routes')
// })

// app.get('/buyproduct',(req,res)=>{
//     const {discount} = req.cookies;
//     let price = 30000;
//     if(discount){
//         res.send(`product price is ${price-discount}`)
//     }
//     else{
//         res.send('no discount aplied')
//     }
// })


app.get('/store',(req,res)=>{
    res.cookie('discount',10000,{signed:true});
    res.send('visted store routes')
})

app.get('/buyproduct',(req,res)=>{
    const {discount} = req.signedCookies;
    let price = 30000;
    if(discount){
        res.send(`product price is ${price-discount}`)
    }
    else{
        res.send('no discount aplied')
    }
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})