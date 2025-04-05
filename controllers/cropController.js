const Crop = require("../models/Crop");

// Add crop details
const addCrop = async (req, res) => {
  try {
    const { name, disease, solution } = req.body;
    const newCrop = await Crop.create({ name, disease, solution });
    res.status(201).json(newCrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all crop details
const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCrop, getCrops };
