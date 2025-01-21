const express = require('express');
const app = express();

const mongoose= require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/SEC-Q')
  .then(() => console.log('DB Connected!'))
  .catch(()=> console.log('DB not conected'))

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const User = mongoose.model('User',userSchema);

// ============ CREATE

// User.create({
//     username:'rahit',
//     password:'rohit123',
//     age:40,
//     city:'Mumbai'
// }).then(()=>{console.log('document created!')})

// ============= READ

// User.find({username:'ajay'})
//     .then((data)=>{console.log(data)})

// User.findOne({username:'ajay'})
//     .then((data)=>{console.log(data)})


// ============ UPDATE

// User.updateOne({username:'ajay'},{age:60})
//     .then((x)=>{console.log(x)})

// User.updateMany({username:'ajay'},{city:'Banglore'})
//     .then((x)=>{console.log(x)})


// =========== delete


// User.deleteOne({username:'ajay'})
// .then((x)=>{console.log(x)})


User.deleteMany({})
.then((x)=>{console.log(x)})


app.listen(4000);