const express = require("express");

// Create Server
const app = express();

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
