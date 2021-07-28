const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    wallet:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Wallet"
    },
    goals:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Goals"
    },
    accountCreatedOn:{
        type:Date,
        default:Date.now
    }
})

const User = new mongoose.Model("User",userSchema);

module.exports= User;