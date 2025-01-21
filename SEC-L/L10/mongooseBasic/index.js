const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/SEC-L')
    .then(()=>{
        console.log('DB Conected')
    })
    .catch(()=>{
        console.log('DB Not Conected')
    })

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    city: String
})

const User = mongoose.model('User',userSchema);

// ============== CREATE
// User.create({
//     username:'rahul',
//     password:'rahul123',
//     age:40,
//     city:'kolkata'
// }).then(()=>{console.log('Document created')})


// ===============READ

// User.find({username:'ajay'})
//     .then((data)=>{
//         console.log(data);
//     })

//==========  UPDATE

// User.updateOne({username:'ajay'},{age:60})
//     .then((data)=>{console.log(data)});


// ========== DELETE

// User.deleteOne({age:60})
//     .then((x)=>{console.log(x)})

User.deleteMany()
    .then((x)=>{console.log(x)})


app.listen(4000)