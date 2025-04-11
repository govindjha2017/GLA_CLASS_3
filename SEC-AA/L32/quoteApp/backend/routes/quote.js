const express = require('express');
const router = express.Router();
const QuoteModel = require('../model/quote');

router.get('/api/quotes',async (req,res)=>{
    const qoutes = await QuoteModel.find({});
    res.status(200).json({
        data:qoutes
    })

})


module.exports = router;