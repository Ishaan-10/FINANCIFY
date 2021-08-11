const express = require('express');
const User = require('../Models/User');
const Wallet = require('../Models/Wallet');
const router = express.Router();

router.get('/',async(req,res)=>{
    const {_id}=req.user;
    const userData = await User.findById(_id);
    const {name,email,accountCreatedOn}=userData;
    res.json({name,email,accountCreatedOn})
})
router.put('/',async(req,res)=>{
    const {_id}=req.user;
    const {name,email}=req.body;
    const userData = await User.findById(_id);

    userData.name=name;
    userData.email=email;
    await userData.save();

})

module.exports = router;
