const  {Router} = require('express');
const  authController = require('../controllers/auth.controller.js');
const authMiddleware = require('../middleware/auth.middleware.js');
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

authRouter.post('/login', authController.loginUserController);

/**
 * @route GET /api/auth/Logout
 * @description Clear token from user cookie and add the token in blacklist
 * @access Private
 */

authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access Private
 */

authRouter.get("/get-me", authMiddleware.authUser);

module.exports = authRouter;

