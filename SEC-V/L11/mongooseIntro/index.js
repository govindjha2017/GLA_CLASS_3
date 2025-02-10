const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MongooseSec-V')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const User = mongoose.model('User',userSchema);

// ============CREATE
// User.create(
//     {
//         username:'rahul',
//         password:'rahul123',
//         age:30,
//         city:'delhi'
//     }
// ).then((x)=>{console.log('document created succesfully')})

// =============READ

// User.find({})
//     .then((data)=>{
//         console.log(data)
//     })

// app.listen(4000)


// =============== UPDATE

// User.updateOne({username:'rahul'},{age:38})
//     .then((x)=>{console.log(x)})


// User.updateMany

// ==========delete


// User.deleteOne({})
//   .then((x)=>{console.log(x)})


User.deleteMany({})
    .then((x)=>{console.log(x)})