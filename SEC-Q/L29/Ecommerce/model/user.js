const { required } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    // username,
    // password,
    email:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true
    },
    cart:[
        {
            productId :{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },
            qantity:{
                type:Number,
                default:1
            }
        }
    ]
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User',userSchema);

module.exports = User;