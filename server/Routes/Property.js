const express = require("express");
const { registerProperty } = require("../Controller/Property");
const router = express.Router();

//get all properties
router.get("/all");

//get a single property
router.get("/:id");

//create a property with all details
router.post("/register/", registerProperty);

//modify a propety with details
router.patch("/change")

//delete a property
router.delete("/remove")

module.exports = router;
