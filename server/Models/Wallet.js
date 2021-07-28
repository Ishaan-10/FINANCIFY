const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({

    amountSpent:{
        type:Number,
    },

    monthlyIncome:[{
        amount:{
            type:Number,
            required:true,
        },
        salaryDate:{
            type:Date,
            required:true,
        }
    }],

    recurringPayments:[{
        name:{
            type:String,
            required:true,
        },
        amount:{
            type:Number,
            required:true,
        },
        repeat:{
            type:Date,
            required:true
        }
    }],

    transactions:[{
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            enum:["Household","Electronics","Others"]
        },
        amount:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now
        },
        paymentMode:{
            type:String,
            enum:["credit card","debit card","cash","bitcoin","net banking","UPI","digital wallets"]
        }
    }]
})

const Wallet = new mongoose.Model("Wallet",walletSchema);
module.exports= Wallet;