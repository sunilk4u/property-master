const User = require("../Model/User");
const ErrorHandler = require("../Utils/ErrorHandler");

const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  //field validation
  if (name.length < 4) {
    return ErrorHandler(
      req,
      res,
      400,
      "Name length should be greater than 3 characters"
    );
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return ErrorHandler(req, res, 400, "Invalid Email");
  } else if (password.length < 8 || !/\d/.test(password)) {
    return ErrorHandler(req, res, 400, "Weak Password");
  } else if (role === null || role === "") {
    return ErrorHandler(req, res, 400, "Role field is empty");
  }

  //check if user is already present
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      return ErrorHandler(req, res, 400, "User is already registered");
    } else if (err) {
      return ErrorHandler(req, res, 500, err.message);
    } else {
      const user = new User({
        name,
        email,
        password,
        role,
      });
      //if user is not preset then save it
      user.save((err) => {
        if (err) {
          return ErrorHandler(req, res, 500, err.message);
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
