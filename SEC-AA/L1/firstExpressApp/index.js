const express = require('express');
const app = express();

app.get('/',(req,res)=>{
     res.send('working fine!')
})

app.listen(5000);