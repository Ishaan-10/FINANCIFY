const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares')

router.get('/',async(req,res)=>{
    console.log(req.user)
    res.send("logged in")
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