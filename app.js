const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
const authenticateUser = require("./middleware/auth");
const jobRouter = require("./routes/jobs");
app.use("/api/v1/jobs", authenticateUser, jobRouter);

const authRouter = require("./routes/auth");
app.use("/api/v1/auth", authRouter);

//middleware
const notFound = require("./middleware/notFound");
app.use(notFound);

const errorHandlerMiddleware = require("./middleware/errorHandler");
app.use(errorHandlerMiddleware);

//
PORT = process.env.PORT || 3000;

const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log("server running"));
  } catch (err) {
    console.log(err);
  }
};

start();
