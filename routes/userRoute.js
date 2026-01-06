


// const {registerUser} = require("c./Controller/userController");

const { registerUser, loginuser } = require("../controller/userController");

const Router = require("express").Router();

Router.post("/register", registerUser);
Router.post("/login", loginuser)

module.exports = Router;