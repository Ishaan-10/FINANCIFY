const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const Wallet = require('../Models/Wallet')

// read
// Need to update the total amount spend as well
router.get('/',async(req,res)=>{
    
    try{
        const {_id}=req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.json(userData.wallet.transactions,userData.wallet._id)
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }

})

// add
router.post('/',async(req,res)=>{

    const {name,category,amount,date,paymentMode}=req.body;
    const newTransaction = {name,category,amount,date,paymentMode};
    const {_id}=req.body;
    const userData = await User.findById(_id).populate('wallet')
    const userWallet = await Wallet.findById(userData.wallet._id);
    userWallet.transactions.push(newTransaction)
    await userWallet.save()
    res.send(await User.findById(_id).populate('wallet'))

})

// delete
router.delete('/',async(req,res)=>{

    const {transaction_id,wallet_id}=req.body;
    const userWallet = await Wallet.findById(wallet_id);
    userWallet.transactions.remove(transaction_id)
    await userWallet.save()
    console.log(userWallet)
})

// modify
router.put('/',async(req,res)=>{

    const {name,category,amount,date,paymentMode,transaction_id,wallet_id}=req.body;
    const userWallet = await Wallet.findById(wallet_id);


})

module.exports = router;