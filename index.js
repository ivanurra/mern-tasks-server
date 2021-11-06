const express = require("express");
const connectDB = require("./config/db");

// Create Server
const app = express();

// Connect to DB
connectDB();

// App PORT
const PORT = process.env.PORT || 4000;

// MAIN PAGE
app.get("/", (req, res) => {
  res.send("Hi world!");
});

// Starting APP
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
