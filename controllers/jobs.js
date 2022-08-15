const Job = require("../models/Job");

const getAllJobs = (req, res) => {
  res.send("all jobs");
};

const createJob = (req, res) => {
  res.json(req.user);
};

const getJob = (req, res) => {
  res.send("create job");
};

const deleteJob = (req, res) => {
  res.send("create job");
};

const editJob = (req, res) => {
  res.send("create job");
};

module.exports = { getAllJobs, createJob, getJob, deleteJob, editJob };
