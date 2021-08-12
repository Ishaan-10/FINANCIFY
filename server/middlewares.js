const ExpressError = require("./ExpressError");

module.exports.isLoggedIn = (req, res, next) => {


    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        throw new ExpressError("Please log in", 403);


    } else {
        next();
    }

}