const authRouter = require('express').Router();
const authController = require('../controllers/auth.controller');

authRouter.post('/registration', authController.registartion);
authRouter.post('/login', authController.login);
authRouter.post('/refresh', authController.refresh);


module.exports = authRouter;