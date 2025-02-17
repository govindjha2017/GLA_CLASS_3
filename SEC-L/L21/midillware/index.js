const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})

let checkPass = (req,res,next)=>{
    const {pass} = req.params;

    if(pass !=='abcd'){
        res.send('password incorrect')
    }
    next()
}

app.get('/secret/:pass',checkPass,(req,res)=>{
    res.send('TOP secret')
})

app.listen(4000)