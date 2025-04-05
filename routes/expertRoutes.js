const express = require("express");
const {
  registerExpert,
  getExperts,
} = require("../controllers/expertController");

const router = express.Router();

router.post("/register", registerExpert); // Register an expert
router.get("/", getExperts); // Get all experts

module.exports = router;
