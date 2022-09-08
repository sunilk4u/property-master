const Property = require("../Model/Property");
const ErrorHandler = require("../Utils/ErrorHandler");

const registerProperty = async (req, res) => {
  const {
    name,
    property_size,
    property_type,
    sell,
    rent,
    lease,
    description,
    price,
    seller
  } = req.body;

  try {
    const property = await new Property({
      name,
      property_size,
      property_type,
      sell,
      rent,
      lease,
      description,
      price,
      seller
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

module.exports = {
  registerProperty,
};
