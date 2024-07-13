const { register } = require("../controllers/user");

const userRoutes = require("express").Router();

userRoutes.post("/register", register);

module.exports = userRoutes;
