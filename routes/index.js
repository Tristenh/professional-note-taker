//  import express
const express = require("express");

// Import our modular routers for /notes
const apiNotesRouter = require("./apinotes");

// create express app
const app = express();

//  /notes endpoint
app.use("/notes", apiNotesRouter);

// export express app
module.exports = app;
