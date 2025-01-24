const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-D')
    .then(()=>{console.log('DB Conected!')})
    .catch(()=>{console.log('DB not coneted!')})

const userSchema = new mongoose.Schema({
        username:String,
        password:String,
        age:Number,
        city:String
})

const User = mongoose.model('User',userSchema)

// =========== CREATE

// User.create({
//     username:'rohit',
//     password:'rohit123',
//     age:34,
//     city:'Mumbai'
// }).then(()=>{console.log('Documnet created!')})


// ========= READ

// User.findOne({username:'rahul'})
//     .then((x)=>{console.log(x)});


// User.find({})
//     .then((x)=>{console.log(x)});

// ======  UPDATE

// User.updateOne({username:'rahul'},{age:60})
//     .then((x)=>{console.log(x)});

// User.updateMany({},{city:'Banglore'})
//     .then((x)=>{console.log(x)});

// ======= DELETE

// User.deleteOne({city:'Banglore'})
//     .then((x)=>{console.log(x)})


User.deleteMany({})
    .then((x)=>{console.log(x)})


app.listen(4000)