const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const api = require("./routes/index");

// middleware for parsing JSON data
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
