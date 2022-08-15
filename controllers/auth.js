const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotAuthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please enter email and password");
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new NotAuthenticatedError("invalid credentials");
  }
  const correctPassword = await user.checkPassword(password);
  if (!correctPassword) {
    throw new NotAuthenticatedError("invalid credentials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
