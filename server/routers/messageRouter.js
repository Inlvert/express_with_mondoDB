const messageRouter = require('express').Router();
const messageController = require('../controllers/messege.controller');
const { cheackAccessToken } = require('../middlewares/token.mw');

messageRouter.post('/', cheackAccessToken, messageController.createMessage)
messageRouter.get('/', messageController.getAllMessages)
messageRouter.get('/:messageId', messageController.getMessage)
messageRouter.put('/:messageId', messageController.updateMessage)
messageRouter.delete('/:messageId', messageController.deleteMessage)


module.exports = messageRouter;