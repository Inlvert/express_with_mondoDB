const messageRouter = require('express').Router();
const messageController = require('../controllers/messege.controller');

messageRouter.post('/', messageController.createMessage)
messageRouter.get('/', messageController.getAllMessages)
messageRouter.get('/:messageId', messageController.getMessage)
messageRouter.put('/:messageId', messageController.updateMessage)


module.exports = messageRouter;