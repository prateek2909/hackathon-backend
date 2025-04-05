const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    disease: { type: String, required: true },
    solution: { type: String, required: true },
  },
  { timestamps: true }
);

const Crop = mongoose.model("Crop", cropSchema);
module.exports = Crop;
