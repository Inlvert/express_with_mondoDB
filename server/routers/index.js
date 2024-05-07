const router = require('express').Router();
const { json } = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;