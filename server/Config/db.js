const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URI;

//create connection to mongodb atlas
const db_connect = () =>
  mongoose.connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("Error occured connecting to database.");
        throw err;
      }
      console.log("mongo database connected.");
    }
  );

module.exports = db_connect;
