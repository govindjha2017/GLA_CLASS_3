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
User.create(
    {
        username:'rahul',
        password:'rahul123',
        age:30,
        city:'delhi'
    }
).then((x)=>{console.log('document created succesfully')})

app.listen(4000)