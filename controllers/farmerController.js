const Farmer = require("../models/Farmer");

// Register a new farmer
const registerFarmer = async (req, res) => {
  try {
    const { name, phone, location } = req.body;

    if (!name || !phone || !location) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newFarmer = await Farmer.create({ name, phone, location });
    res.status(201).json({ success: true, data: newFarmer });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all farmers
const getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json({ success: true, data: farmers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerFarmer, getFarmers };
