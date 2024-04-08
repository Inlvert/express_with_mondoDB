const messageRouter = require('express').Router();
const messageController = require('../controllers/messege.controller');

messageRouter.post('/', messageController.createMessage)
messageRouter.get('/', messageController.getAllMessages)
messageRouter.get('/:messageId', messageController.getMessage)


module.exports = messageRouter;