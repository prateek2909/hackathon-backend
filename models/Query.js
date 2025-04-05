const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    expert: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expert",
      default: null,
    },
    answer: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", querySchema);
module.exports = Query;
