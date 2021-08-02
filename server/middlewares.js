
module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        console.log("test")
        req.session.returnTo = req.originalUrl;
        return res.redirect('/signin');
    }
    next();

}