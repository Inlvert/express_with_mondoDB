const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
  
    const user = await User.find().populate('messages');

    res.send({data: user})
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    // const user = await User.findById(userId, 'firstName lastName email');
    const user = await User.findById(userId).select('firstName lastName email');

    res.send({data: user})
  } catch (error) {
    next(error);
  }
};
