const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const Wallet = require('../Models/Wallet')

router.get('/',async(req,res)=>{

    try{
        const {_id}=req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.json(userData.wallet.recurringPayments,userData.wallet._id)
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }


})

// add
router.post('/',async(req,res)=>{

    const {name,amount,date,repeatDuration}=req.body;
    const newPayment = {name,amount,date,repeatDuration};
    const {_id}=req.body;
    const userData = await User.findById(_id).populate('wallet')
    const userWallet = await Wallet.findById(userData.wallet._id);
    userWallet.recurringPayments.push(newPayment);
    await userWallet.save()
    res.send(await User.findById(_id).populate('wallet'))
    
})

// delete
router.delete('/',async(req,res)=>{

    const {payment_id,wallet_id}=req.body;
    const userWallet = await Wallet.findById(wallet_id);
    userWallet.recurringPayments.remove(payment_id)
    await userWallet.save()
    console.log(userWallet)
    
})

// modify
router.put('/',async(req,res)=>{

})


module.exports = router;