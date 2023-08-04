// import required modules
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// create express app
const app = express();
// import the api routes
const api = require("./routes/routesIndex");

// middleware for parsing JSON data
app.use(express.json());
// serve static files from 'public' directory
app.use(express.static("public"));
// /api endpoint
app.use("/api", api);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// start server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
