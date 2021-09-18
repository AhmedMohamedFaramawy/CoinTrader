
const jwt = require("jsonwebtoken");

/*
module.exports.authenticateToken = (req, res, next) => {

    console.log("google passed token: ", req.body.JWTtoken);

    if(req.body.JWTtoken) {
    jwt.verify(token ,process.env.ACCESS_TOKEN_SECRET, (err, newUser) => {
       
        if (err) {
             console.log("err is :", err);
             return res.sendStatus(403).json("TOKEN is invalid!");
        } 
        req.user = newUser;
        next();
    })
} else {
    return res.sendStatus(401);
}
};
*/


module.exports.authenticateToken = (req, res, next) => {
    
    // can I get the JWT Token here immedaitly  instead of passing it from the frontend  

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]
    console.log("Here is the  authHeader :" , authHeader);
    console.log(token);

    if(token) {
    jwt.verify(token ,process.env.ACCESS_TOKEN_SECRET, (err, newUser) => {
       
        if (err) {
             console.log("err is :", err);
             return res.sendStatus(403).json("TOKEN is invalid!");
        } 
        req.user = newUser;
        next();
    })
} else {
    return res.sendStatus(401);
}
};
