const express = require("express");
const {
  askQuery,
  answerQuery,
  getAllQueries,
} = require("../controllers/queryController");

const router = express.Router();

router.post("/ask", askQuery);
router.post("/answer/:id", answerQuery);
router.get("/", getAllQueries);

module.exports = router;
