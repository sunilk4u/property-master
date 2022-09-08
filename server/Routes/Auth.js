const express = require("express");
const { registerUser, loginUser } = require("../Controller/Auth");
const router = express.Router();

//login user
router.post("/login", loginUser);

//sign up user
router.post("/signup", registerUser);

//forgot password
router.post("/forgotpassword");

module.exports = router;
