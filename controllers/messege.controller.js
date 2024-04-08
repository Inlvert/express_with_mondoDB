const createHttpError = require('http-errors');
const { Message } = require('../models');

module.exports.createMessage = async (req, res, next) => {
  try {
    const {user, body} = req;

    const message = await Message.create({
      ...body,
      user: user._id
    })

    console.log(user)

    res.status(201).send({data: message});

  } catch (error) {
    next(error);
  }
}

module.exports.getAllMessages = async (req, res, next) => {
  try {

    const messages = await Message.find();

    res.send({data: messages});

  } catch(error) {
    next(error);
  }
}

module.exports.getMessage = async (req, res, next) => {
  try {
    const {params: {messageId}, user } = req;

    const message = await Message.findOne({
      _id: messageId,
      user
    })

    console.log(req.user._id);

    if(!message) {
      return (next(createHttpError(404, 'message not found')))
    }

    res.send({data: message});
  } catch (error) {
    next(error)
  }
}