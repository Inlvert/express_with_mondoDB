const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const { findUser } = require('../middlewares/findUser.mw');
const messageRouter = require('./messageRouter');

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getUsers);

userRouter.get('/:userId', userController.getUser);

userRouter.use('/:userId/messages', findUser, messageRouter)



module.exports = userRouter;