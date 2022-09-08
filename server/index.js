require("dotenv").config();
const express = require("express");
const db_connect = require("./Config/db");
const propertyRoute = require("./Routes/Property");
const authRoute = require("./Routes/Auth")
const reqLogger = require("./Middleware/RequestLogger");
const app = express();

//connect to database
db_connect();

//midlewares
app.use(express.json());
app.use(reqLogger);
app.use("/api/property", propertyRoute);
app.use("/api/user", authRoute);


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
