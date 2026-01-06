const { createjob } = require("../controller/jobController");

const Router = require("express").Router();


Router.post("/create", createjob)