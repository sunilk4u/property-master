const mongoose = require("mongoose");

//user collection schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of user is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["buyer", "seller"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//create user model
const User = mongoose.model("User", userSchema);

module.exports = User;
