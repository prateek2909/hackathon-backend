const Expert = require("../models/Expert");

// Register a new expert
const registerExpert = async (req, res) => {
  try {
    const { name, specialization, phone } = req.body;

    if (!name || !specialization || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newExpert = await Expert.create({ name, specialization, phone });
    res.status(201).json({ success: true, data: newExpert });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all experts
const getExperts = async (req, res) => {
  try {
    const experts = await Expert.find();
    res.status(200).json({ success: true, data: experts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerExpert, getExperts };
