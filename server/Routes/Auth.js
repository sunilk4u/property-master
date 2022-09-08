const express = require("express");
const { registerUser } = require("../Controller/Auth");
const router = express.Router();

//login user
router.post("/login");

//sign up user
router.post("/signup", registerUser);

//forgot password
router.post("/forgotpassword");

module.exports = router;
