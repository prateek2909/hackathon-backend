const express = require("express");
const { getCrops, addCrop } = require("../controllers/cropController");

const router = express.Router();

router.post("/add", addCrop); // Add new crop info
router.get("/", getCrops); // Get all crop information

module.exports = router;
