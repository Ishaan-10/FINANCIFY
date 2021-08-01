const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body;
    res.json(req.body)
})
router.post('/register',(req,res)=>{
    console.log(req.body);
    const {email,name,password}=req.body;
    res.json(req.body)
})


module.exports = router;