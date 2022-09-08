const User = require("../Model/User");

const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.status(400).json({
        message: "User is already registered",
      });
    } else if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      const user = new User({
        name,
        email,
        password,
        role,
      });
      user.save((err) => {
        if (err) {
          res.status(500).json({
            message: err.message,
          });
        } else {
          res.status(201).json(user);
        }
      });
    }
  });
};

module.exports = {
  registerUser,
};
