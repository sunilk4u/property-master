const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URI;

const db_connect = () => mongoose.connect(mongoUrl, (err) => {
  if (err) {
    console.log("Error occured connecting to database.")
    throw err;
  }
  console.log("mongo database connected.");
})

module.exports = db_connect;