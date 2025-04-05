const errorHandler = (err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ success: false, error: err.message });
};

module.exports = errorHandler;
