const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log("login route")
    res.render()
})
router.get('/register', (req, res) => {
    console.log("register route")
})


module.exports = router;