const jwt = require('jsonwebtoken');

function authUser(req, res, next){
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({
            message: "Unauthorized, token not found"
        })
    }
    
   try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
   }
   catch(error){ 
    message: "Unauthorized, invalid token"
    }
}

module.exports = {authUser};