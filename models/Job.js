const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
});

module.exports = mongoose.model("Job", jobSchema);
