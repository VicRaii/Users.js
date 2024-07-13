const User = require("../models/user");

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
    });

    const userDuplicated = await User.findOne({ userName: req.body.userName });

    if (userDuplicated) {
      return res.status(404).json("Ese nombre de usuario ya existe");
    }

    const userSaved = await newUser.save();

    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { register };
