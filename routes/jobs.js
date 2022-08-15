const express = require("express");
const {
  getAllJobs,
  createJob,
  getJob,
  deleteJob,
  editJob,
} = require("../controllers/jobs.js");

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJob).patch(editJob);

module.exports = router;
