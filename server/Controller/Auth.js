const User = require("../Model/User");
const ErrorHandler = require("../Utils/ErrorHandler");
const bcrypt = require("bcrypt");
const generateToken = require("../Utils/GenerateToken");

//register new user
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
      //if user is not present then save it
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

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const matchPassword = await bcrypt.compare(password, user.password);

      if (matchPassword) {
        let token = generateToken(user);
        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000),
          })
          .json({
            id: user.id,
            name: user.name,
          });
      } else {
        res.status(401).json({
          status: 401,
          message: "Password did not match",
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        message: "User not registered",
      });
    }
  } catch (err) {
    console.log(err);
    return ErrorHandler(req, res, 500, "Internal server error");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
