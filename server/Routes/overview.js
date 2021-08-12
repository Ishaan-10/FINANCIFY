const express = require('express');
const router = express.Router();
const Goal = require('../Models/Goals')
const User = require('../Models/User')
const Wallet = require('../Models/Wallet');


router.get('/',async(req,res)=>{

    try{
        const userData = await User.findById(req.user._id).populate('goals').populate('wallet');
        
        const data = {
            totalAmountSpent: userData.wallet.amountSpent,
            monthlyIncome:userData.wallet.monthlyIncome.amount,
            monthlyIncomeDate:userData.wallet.monthlyIncome.salaryDate,
            transactionsCount:userData.wallet.transactions.length,
            recurringCount:userData.wallet.recurringPayments.length,
            recentTransactions:userData.wallet.transactions.slice(userData.wallet.transactions.length-5),
            goals:userData.goals,
        }
        res.json(data)


    }catch(e){
        console.log(e.message)
    }
})
module.exports = router;