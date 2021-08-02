const express = require('express');
const router = express.Router();
const User = require('../Models/User')

// create
// Need to update the total amount spend as well
router.get('/',async(req,res)=>{

    try{
        const {_id}=req.user;
        const userData = User.find({_id}).populate('Wallet');
        res.status(200).json(userData.transactions)
    }
    catch(e){
        res.status(200).json({"error":e.message})
    }



})

// update
router.post('/',async(req,res)=>{
    
})

// delete
router.delete('/',async(req,res)=>{

})

// modify
router.put('/',async(req,res)=>{

})

module.exports = router;