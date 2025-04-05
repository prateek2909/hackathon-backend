const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    queries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Query",
      },
    ],
  },
  { timestamps: true }
);

// Optional index for performance
farmerSchema.index({ phone: 1 });

const Farmer = mongoose.model("Farmer", farmerSchema);
module.exports = Farmer;
