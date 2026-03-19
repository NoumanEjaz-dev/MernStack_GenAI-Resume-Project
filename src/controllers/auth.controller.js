const userModel = require('../models/user.models');

/**
 * @name registerUserController
 * @description Register a new user. exppects username, email an password in the required 
 * @access Public 
 */

async function registerUserController(req, res){
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({
            message:"Please provide username, email and password"            
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
    $or: [{username}, {email}]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "Account aleardy exist with this email address or username"
        })
    }

}



module.exports ={
    registerUserController,
}