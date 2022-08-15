const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customError");

class NotAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = NotAuthenticatedError;
