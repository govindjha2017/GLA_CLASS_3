const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-AA')
  .then(() => console.log('DB Connected!'))
  .catch(()=>{ console.log('DB Not Connected!')})

const userSchema = new mongoose.Schema({
    username:String,
    passowrd:String,
    age:Number,
    city:String
})

const User = mongoose.model('User',userSchema)

// User.create({
//     username:'rohit',
//     password:'rohit123',
//     age:45,
//     city:'Kolkata'
// }).then(()=>{console.log('document created!')})

// ========= READ

// User.findOne({username:'rahul'})
//   .then((data)=>{console.log(data)})

// User.find({})
//   .then((data)=>{console.log(data)})


// ========== UPDATE

// User.updateOne({username:'rahul'},{age:60})
//   .then((x)=>{console.log(x)});

// User.updateMany({},{city:'Mumbai'})
// .then((x)=>{console.log(x)});

// ========= DELETE

// User.deleteOne({age:60})
//   .then((x)=>{console.log(x)})

User.deleteMany({})
  .then((x)=>{console.log(x)})

app.listen(4000);