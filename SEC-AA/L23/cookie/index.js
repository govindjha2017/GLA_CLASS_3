const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secretKey'))

app.get('/',(req,res)=>{
    res.send('working fine!')
})

// app.get('/store',(req,res)=>{
//     res.cookie('discount',10000);
//     res.send('visted store routes')
// })

// app.get('/buyproduct',(req,res)=>{
//     let productprice = 40000;
//     const {discount} = req.cookies;
//     if(discount){
//         productprice-=discount;
//         res.send('product purchased!')
//     }
//     else{
//         res.send('discount not available')
//     }
// })

app.get('/store',(req,res)=>{
    res.cookie('discount',10000,{signed:true});
    res.send('visted store routes')
})

app.get('/buyproduct',(req,res)=>{
    let productprice = 40000;
    console.log(req.signedCookies)
    const {discount} = req.signedCookies;
    if(discount){
        productprice-=discount;
        res.send(`produt price is ${productprice}`)
    }
    else{
        res.send(`produt price is ${productprice}`)
    }
})
app.listen(4000,()=>{
    console.log('server run at port 4000')
})