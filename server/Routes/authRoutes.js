const express = require('express');
const router = express.Router();
const User = require("../Models/User");
const Wallet = require("../Models/Wallet");
const passport = require('passport');
const { isLoggedIn } = require('../middlewares');

router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.status(400).json({ message: "No User Exists" });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json(req.user);
            });
        }
    })(req, res, next);
})


router.post('/register', async (req, res, next) => {
    const { email, name, password } = req.body;

    const user = new User({ email, name });

    const registeredUser = await User.register(user, password);
    const newWallet = new Wallet();
    registeredUser.wallet = newWallet;
    newWallet.save()
    registeredUser.save()
    console.log(registeredUser)

    req.login(registeredUser, err => {
        if (err) { return next(err); }

    });
    res.json(req.user)

});

router.get('/logout', async (req, res) => {
    try {
        req.logout();
        res.json({ "message": "Succesfully Logged out", "redirectUrl": "/" })
    } catch (e) {
        res.status(400).json({ "error": e.message })
    }

})


module.exports = router;