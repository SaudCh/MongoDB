const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Birds", birdSchema);
