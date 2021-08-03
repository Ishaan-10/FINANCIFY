const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    wallet: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Wallet"
    },
    goals: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Goals"
    }],
    accountCreatedOn: {
        type: Date,
        default: Date.now
    }
});


userSchema.plugin(passportLocalMongoose,
    { usernameField: 'email' });

const User = new mongoose.model("User", userSchema);

module.exports = User;