require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const farmerRoutes = require("./routes/farmerRoutes");
const expertRoutes = require("./routes/expertRoutes");
const queryRoutes = require("./routes/queryRoutes");
const cropRoutes = require("./routes/cropRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/farmers", farmerRoutes);
app.use("/api/experts", expertRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/crops", cropRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => console.log("❌ MongoDB Connection Error:", error));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const errorHandler = require("./middleware/errorHandler");

// Global Error Handler (Add this at the end)
app.use(errorHandler);
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();
