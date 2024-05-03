const createHttpError = require("http-errors");
const { User } = require("../models");

module.exports.registartion = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return next(createHttpError(404, "invalid data"));
    }

    if (user.password !== password) {
      return next(createHttpError(404, "invalid data"));
    }

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
