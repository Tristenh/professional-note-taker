const apiNotes = require("express").Router();

const fs = require("fs");

apiNotes.get("/", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const parsedNotes = JSON.parse(data);
  res.json(parsedNotes);
});

module.exports = apiNotes;
