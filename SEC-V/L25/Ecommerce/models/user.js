const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    cart: [
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

module.exports = User