const Property = require("../Model/Property");
const ErrorHandler = require("../Utils/ErrorHandler");

//register a property into the database
const registerProperty = async (req, res) => {
  const {
    name,
    address,
    property_size,
    property_type,
    sell,
    rent,
    lease,
    description,
    price,
    seller,
  } = req.body;

  try {
    const property = await new Property({
      name,
      address,
      property_size,
      property_type,
      sell,
      rent,
      lease,
      description,
      price,
      seller,
    });
    property.save((err) => {
      if (err) {
        return ErrorHandler(req, res, 500, err.message);
      } else {
        res.status(201).json(property);
      }
    });
  } catch (err) {
    return ErrorHandler(req, res, 500, err.message);
  }
};

//list all the property in the database
const listAllProperty = async (req, res) => {
  try {
    const property = await Property.find({});
    if (property) {
      res.status(200).json(property);
    } else {
      return ErrorHandler(req, res, 404, "Data not found");
    }
  } catch (err) {
    return ErrorHandler(req, res, 500, err.message);
  }
};

//search the property database and provide data according to query params
const searchProperty = async (req, res) => {
  try {
    const { state, city, type } = req.query;
    if (state && city && type) {
      const property = await Property.find({
        $and: [
          { "address.city": city },
          { "address.state": state },
          { property_type: type },
        ],
      });
      if (!(property.length > 0)) {
        return ErrorHandler(req, res, 404, "Property not found in database");
      }
      res.status(200).json(property);
    } else {
      res.status(404).json({
        status: 404,
        message: "Invalid query",
      });
    }
  } catch (err) {
    return ErrorHandler(req, res, 500, err.message);
  }
};
module.exports = {
  registerProperty,
  listAllProperty,
  searchProperty,
};
