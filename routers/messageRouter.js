const messageRouter = require('express').Router();
const messageController = require('../controllers/messege.controller');

messageRouter.post('/', messageController.createMessage)

module.exports = messageRouter;