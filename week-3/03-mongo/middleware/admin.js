// Middleware for handling auth
const {Admin} = require("../db")
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const username = req.headers.username;
        const password = req.headers.password;

        if(!username || !password){
           res.status(404).json({
               msg: "Username or Password Invalid"
           })
            return;
        }

        const user = await Admin.findOne({username: username});

        if(!user){
            res.status(404).json({
                msg: "Only for Admins"
            })
            return;
        }
        if(user.password !== password){
            res.status(403).json({
                msg: "Incorrect Password"
            })
            return;
        }

        next();
    }
    catch (err){
        res.status(500).json({
            msg: "Could not verify user"
        })
    }
}

module.exports = adminMiddleware;