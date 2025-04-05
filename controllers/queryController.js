const Query = require("../models/Query");

// Farmer asks a query
const askQuery = async (req, res) => {
  try {
    const { question, farmer } = req.body;

    if (!question || !farmer) {
      return res.status(400).json({
        success: false,
        message: "Question and farmer ID are required",
      });
    }

    const newQuery = await Query.create({ question, farmer });

    res.status(201).json({
      success: true,
      data: newQuery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Expert answers a query
const answerQuery = async (req, res) => {
  try {
    const { answer, expert } = req.body;

    if (!answer || !expert) {
      return res.status(400).json({
        success: false,
        message: "Answer and expert ID are required",
      });
    }

    const query = await Query.findById(req.params.id);
    if (!query) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    query.answer = answer;
    query.expert = expert;
    await query.save();

    res.status(200).json({
      success: true,
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all queries with farmer and expert info
const getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find()
      .populate("farmer", "name phone location")
      .populate("expert", "name specialization");

    res.status(200).json({
      success: true,
      data: queries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { askQuery, answerQuery, getAllQueries };
