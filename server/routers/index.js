const router = require('express').Router();
const { json } = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const messageController = require('../controllers/messege.controller')

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.get('/messages', messageController.getAllMessages);

module.exports = router;