const express = require("express");
const router = express.Router();

//get all properties
router.get("/all");

//get a single property
router.get("/:id");

//create a property with all details
router.post("/property/");

//modify a propety with details
router.patch("/property")

//delete a property
router.delete("/property")

module.exports = router;
