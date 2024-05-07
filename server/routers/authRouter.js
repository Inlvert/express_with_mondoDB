const authRouter = require('express').Router();
const authController = require('../controllers/auth.controller');
const { cheackRefreshToken } = require('../middlewares/token.mw');

authRouter.post('/registration', authController.registartion);
authRouter.post('/login', authController.login);
authRouter.post('/refresh', cheackRefreshToken, authController.refresh);


module.exports = authRouter;