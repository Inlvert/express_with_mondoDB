const createHttpError = require("http-errors");
const { User, RefreshToken } = require("../models");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const jwtSign = promisify(jwt.sign);

module.exports.registartion = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    // payload для токена
    const tokenPayload = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    // генерируем токен
    const accessToken = await jwtSign(tokenPayload, "omkl44sr848g4rgyy", {
      expiresIn: "1min",
    });

    const refreshToken = await jwtSign(tokenPayload, "jhjnklygyuh54gth4h", {
      expiresIn: "7d",
    });

    // save refreshToken in DB

    await RefreshToken.create({ token: refreshToken, userId: user._id });

    //отправим все на фронт

    res.status(201).send({
      data: {
        user,
        tokenPair: {
          accessToken,
          refreshToken,
        },
      },
    });
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

    // payload для токена
    const tokenPayload = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    // генерируем токен
    const accessToken = await jwtSign(tokenPayload, "omkl44sr848g4rgyy", {
      expiresIn: "1min",
    });

    const refreshToken = await jwtSign(tokenPayload, "jhjnklygyuh54gth4h", {
      expiresIn: "7d",
    });

    // save refreshToken in DB

    await RefreshToken.create({ token: refreshToken, userId: user._id });

    // отправим все на фронт

    res.status(201).send({
      data: {
        user,
        tokenPair: {
          accessToken,
          refreshToken,
        },
      },
    });
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
