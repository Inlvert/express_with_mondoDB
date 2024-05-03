const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const tokenConfig = {
  access: {
    secret: "omkl44sr848g4rgyy",
    expiresIn: "1min",
  },
  refresh: {
    secret: "jhjnklygyuh54gth4h",
    expiresIn: "7d",
  },
};

const createToken = (payload, { secret, expiresIn }) =>
  jwtSign(payload, secret, { expiresIn });

const verifyToken = (token, { secret }) => jwtVerify(token, secret);

module.exports.createTokenPair = async (payload) => {
  return {
    accessToken: await createToken(payload, tokenConfig.access),
    refreshToken: await createToken(payload, tokenConfig.refresh),
  };
};


module.exports.verifyAccessToken = token => verifyToken(token, tokenConfig.access);
module.exports.verifyRefreshToken = token => verifyToken(token, tokenConfig.refresh);