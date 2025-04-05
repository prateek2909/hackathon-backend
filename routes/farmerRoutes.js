const express = require("express");
const {
  registerFarmer,
  getFarmers,
} = require("../controllers/farmerController");

const router = express.Router();

router.post("/register", registerFarmer); // Register a new farmer
router.get("/", getFarmers); // Get all farmers

module.exports = router;
