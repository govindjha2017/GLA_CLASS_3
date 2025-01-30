const express = require('express');
const app = express();
var methodOverride = require('method-override')


app.set('view engine','ejs');
app.use(methodOverride('_method'))

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-L-Restfull')
  .then(() => console.log('DB Connected!'))
  .catch(()=>{console.log('DB not conected')})


const Product = require('./model/Product');

app.use(express.urlencoded({extended:true}))

app.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('product',{products})
})

app.get('/product/new',(req,res)=>{
  res.render('new')
})

app.post('/products',async (req,res)=>{
   const {name,image,price,desc} = req.body;
   await Product.create({name,image,price,desc})
   res.redirect('/products')
})

app.get('/products/:id',async (req,res)=>{
     const {id} = req.params;
     const product = await Product.findById(id)
     res.render('show',{product})
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('edit',{product})
})

app.put('/products/:id',async (req,res)=>{
  const {name,image,price,desc} = req.body;
  const {id} = req.params;
  await Product.updateOne({_id:id},{name,image,price,desc})
  // await Product.findByIdAndUpdate(id,{name,image,price,desc});
  res.redirect('/products')

})

app.delete('/products/:id',async (req,res)=>{
  const {id} = req.params;
  await Product.deleteOne({_id:id});
  res.redirect('back')
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})