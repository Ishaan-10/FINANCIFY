const express = require('express');
const User = require('../Models/User');
const Wallet = require('../Models/Wallet');
const router = express.Router();

router.get('/',async(req,res)=>{

    try{
        const {_id}=req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.json(userData.wallet.monthlyIncome)
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }

})

// update
router.post('/',async(req,res)=>{

    const {amount,salaryDate}=req.body;
    const {_id}=req.user;
    const newIncome={amount,salaryDate};

    const userData = await User.findById(_id)
    const userWallet = await Wallet.findByIdAndUpdate({_id:userData.wallet});
    userWallet.monthlyIncome=newIncome;
    await userWallet.save();
    res.json({"message":"Successfully Added Income Source"})
    
})

// delete
router.delete('/',async(req,res)=>{

    const {income_id,wallet_id}=req.body;
    const userWallet = await Wallet.findById(wallet_id);
    userWallet.monthlyIncome.remove(transaction_id)
    await userWallet.save()
    console.log(userWallet)

})

// modify
// router.put('/',async(req,res)=>{

// })


module.exports = router;