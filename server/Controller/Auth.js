const User = require("../Model/User");
const ErrorHandler = require("../Utils/ErrorHandler");

const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  //check if user is already present
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      ErrorHandler(req, res, 400, "User is already registered");
    } else if (err) {
      ErrorHandler(req, res, 500, err.message);
    } else {
      const user = new User({
        name,
        email,
        password,
        role,
      });
      user.save((err) => {
        if (err) {
          ErrorHandler(req, res, 500, err.message);
        } else {
          res.status(201).json({
            name: user.name,
            email: user.email,
          });
        }
      });
    }
  });
};

module.exports = {
  registerUser,
};
