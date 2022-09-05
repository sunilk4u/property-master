require("dotenv").config();
const express = require("express");
const db_connect = require("./Config/db");
const app = express();

//midlewares
app.use(express.json());

//connect to database
db_connect();

//server status
app.get("/api", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Server is up and running.",
  });
});

//request does not match any route
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Resource not found",
  });
});

//listening to port
app.listen(process.env.PORT || 3500, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
