const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    console.log(req.user)
    console.log("Server works")
})

module.exports = router;