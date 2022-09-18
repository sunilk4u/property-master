const mongoose = require("mongoose");

// property collection schema
const propertySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true
      }
    },
    property_size: {
      size: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
        enum: ["sqft", "sqyd", "sqm", "acre", "hectare"],
      },
    },
    property_type: {
      type: String,
      required: true,
      enum: ["apartment", "plot", "villa", "independent house", "commercial"],
    },
    sell: {
      type: Boolean,
      required: true,
    },
    rent: {
      type: Boolean,
      required: true,
    },
    lease: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 60,
    },
    price: {
      value: {
        type: Number,
        require: true,
      },
      currency: {
        type: String,
        required: true,
        enum: ["INR", "USD"],
      },
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// create property model
const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
