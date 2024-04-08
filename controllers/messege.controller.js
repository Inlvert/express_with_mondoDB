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
    const {} = req;

    const messages = await Message.find()
  } catch(error) {
    next(error);
  }
}