const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

console.log("de ce plang chitarele");

app.listen(3000);
