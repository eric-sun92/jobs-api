const CustomAPIError = require("./customError");
const BadRequestError = require("./badRequestError");
const NotFoundError = require("./notFound");
const NotAuthenticatedError = require("./nonAuthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  NotAuthenticatedError,
};
