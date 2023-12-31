// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET_ADMIN} = require("../config");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token){
        res.status(500).json({
            msg: "Invalid token"
        })
        return;
    }
    const words = token.split(" ");
    const jwtToken = words[1];

    const verified = jwt.verify(jwtToken, JWT_SECRET_ADMIN);
    if(verified.username){
        next();
    }
    else{
        res.status(403).json({
            msg: "Not authorized"
        })
    }
}

module.exports = adminMiddleware;