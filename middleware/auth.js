require("dotenv").config();
const jwt = require("jsonwebtoken");
const { NotAuthenticatedError } = require("../errors");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new NotAuthenticatedError("no token");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };

    next();
  } catch (err) {
    throw new NotAuthenticatedError("not authorized");
  }
};

module.exports = authenticate;
