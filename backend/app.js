// Import required modules
import express from "express";
import cors from "cors";
import "dotenv/config";
import debug from "debug";
import connectDB from "./config/mongodb-connection.config.js";

// Connect to MongoDB database
connectDB();

// App Config
const app = express();
const PORT = process.env.PORT || 4000;
const debugging = debug("development:app");

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server and listen on specified PORT
app.listen(PORT, () => {
  debugging("Server started on PORT: " + PORT);
});
