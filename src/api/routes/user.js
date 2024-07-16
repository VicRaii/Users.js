const { isAuth, isPaquito } = require("../../middlewares/auth");
const {
  register,
  login,
  deleteUser,
  getUsers,
} = require("../controllers/user");

const userRoutes = require("express").Router();

userRoutes.get("/", [isAuth], getUsers);
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.delete("/:id", [isPaquito], deleteUser);

module.exports = userRoutes;
