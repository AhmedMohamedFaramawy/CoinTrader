module.exports.isAuth = (req, res , next) => {
    // isAuthenticated() checks that req.session.passport.user !== undefined
    //Note: I DONT HAVE THE passport part in my session in my database, moreover i dont have a cookie in my browser
    if(req.isAuthenticated()){
        next();
    } else {
        res.status(401).json({ msg: "Your Not authorized to view this source"});
    }
};