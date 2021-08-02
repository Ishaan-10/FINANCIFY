const express = require('express');
const router = express.Router();
const User = require("../Models/User");
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
})


router.post('/register', async (req, res, next) => {
    const { email, name, password } = req.body;

    const user = new User({ email, name });

    const registeredUser = await User.register(user, password);

    req.login(registeredUser, err => {
        if (err) { return next(err); }
        next();

    });


});



module.exports = router;