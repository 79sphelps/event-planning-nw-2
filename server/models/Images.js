"use strict";

const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  description: String,
  editable: {
    type: Boolean,
    required: true
  }
});

const Image = mongoose.model("Images", ImageSchema);
module.exports = Image;
