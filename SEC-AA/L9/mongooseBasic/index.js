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

User.create({
    username:'rahul',
    password:'rahul123',
    age:34,
    city:'Delhi'
}).then(()=>{console.log('document created!')})

app.listen(4000);