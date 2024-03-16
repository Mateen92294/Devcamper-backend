const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Name can not be more than 500 characters"],
  },
  website: {
    type: String,
    match: ["Please add a valid URL with HTTP or HTTPS"],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters "],
  },
  address: {
    type: String,
    required: [true, "Please add a name"],
  },
  location: {
    // GeoJSON point
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
