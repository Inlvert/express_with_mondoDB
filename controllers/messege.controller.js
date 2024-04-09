const createHttpError = require("http-errors");
const { Message } = require("../models");

module.exports.createMessage = async (req, res, next) => {
  try {
    const { user, body } = req;

    const message = await Message.create({
      ...body,
      user: user._id,
    });

    await user.updateOne({ $push: {messages: message._id}})
    console.log(user);

    res.status(201).send({ data: message });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();

    res.send({ data: messages });
  } catch (error) {
    next(error);
  }
};

module.exports.getMessage = async (req, res, next) => {
  try {
    const {
      params: { messageId },
      user: { _id: userId },
    } = req;

    const message = await Message.findOne({
      _id: messageId,
      user: userId,
    });

    if (!message) {
      return next(createHttpError(404, "Message not found"));
    }

    res.send({ data: message });
  } catch (error) {
    next(error);
  }
};

module.exports.updateMessage = async (req, res, next) => {
  try {
    const {
      user: { _id: userId },
      params: { messageId },
      body,
    } = req;

    const updatedMessage = await Message.findOneAndUpdate(
      {
        _id: messageId,
        user: userId,
      },
      body,
      { new: true }
    );

    if (!updatedMessage) {
      return next(createHttpError(404, "Message not found"));
    }

    console.log(messageId);
    console.log(userId);
    console.log(updatedMessage);

    res.send({ data: updatedMessage });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteMessage = async (req, res, next) => {
  try {
    const {
      user: { _id: userId },
      params: { messageId },
    } = req;

    const message = await Message.findOneAndDelete({
      _id: messageId,
      user: userId,
    });

    if (!message) {
      return next(createHttpError(404, "message not found"));
    }

    res.send({ data: message });
  } catch (error) {
    next(error);
  }
};
