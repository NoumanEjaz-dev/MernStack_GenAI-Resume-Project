const  {Router} = require('express');
const  authController = require('../controllers/auth.controller.js');
const authRouter = Router(); 


/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public 
 */


authRouter.post("/register", authController.registerUserController);



/**
 * @route POST /api/auth/Login
 * @description Login a user with email and password
 * @access Public 
 */

authRouter.post('/login', authController.LoginUserController);


// authRouter.post('/register', (req, res)=>{
//     res.send("register api this is a post api")
// })

// authRouter.get('/login', (req , res)=>{
//     res.send("login api this is a get api");
// }) 


module.exports = authRouter;

