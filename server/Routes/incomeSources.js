const express = require('express');
const User = require('../Models/User');
const Wallet = require('../Models/Wallet');
const router = express.Router();

router.get('/',async(req,res)=>{

    try{
        const {_id}=req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.json(userData.wallet.monthlyIncome,userData.wallet._id)
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }

})

// update
router.post('/',async(req,res)=>{

    const {amount,salaryDate}=req.body;
    const {_id}=req.body;
    const newIncome={amount,salaryDate};
    const userData = await User.findById(_id)
    console.log(userData.wallet)
    const userWallet = await Wallet.findById({_id:userData.wallet});
    userWallet.monthlyIncome.push(newIncome);
    await userWallet.save();
    res.json({"message":"Successfully Added New Income Source"})
    
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
router.put('/',async(req,res)=>{

})


module.exports = router;