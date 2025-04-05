const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    specialization: {
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
    queriesAnswered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Query",
      },
    ],
  },
  { timestamps: true }
);

expertSchema.index({ phone: 1 }); // Optional index for optimization

const Expert = mongoose.model("Expert", expertSchema);
module.exports = Expert;
