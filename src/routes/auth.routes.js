const  {Router} = require('express');

const authRouter = Router(); 


/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public 
 */


authRouter.post('/register', (req, res)=>{
    res.send("register api this is a post api")
})

authRouter.get('/login', (req , res)=>{
    res.send("login api this is a get api");
})


module.exports = authRouter;

