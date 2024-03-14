const express = require("express");
const dotenv = require("dotenv");

// Load env Vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);