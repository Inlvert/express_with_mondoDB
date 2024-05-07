const { User } = require('../models');

module.exports.findUser = async (req, res, next) => {
  try {
    const {params: {userId}} = req;

    const foundUser = await User.findById(userId);

    req.user = foundUser;

    next();

  } catch (error) {
    next(error);
  }
}