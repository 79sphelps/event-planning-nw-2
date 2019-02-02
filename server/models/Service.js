"use strict";

const mongoose = require("mongoose");
const ServiceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

const Service = mongoose.model("Services", ServiceSchema);
module.exports = Service;
