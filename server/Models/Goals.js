const mongoose = require('mongoose');

const goalsSchema = new mongoose.Schema({

    goal:{
        type:String,
        required:true,
    },
    targetAmount:{
        type:Number,
        required:true,
    },
    currentAmount:{
        type:Number
    },
    startDate:{
        type:Date,
        default:Date.now
    },
    endDate:{
        type:Date,
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Goals = new mongoose.model("Goals",goalsSchema);

module.exports = Goals;