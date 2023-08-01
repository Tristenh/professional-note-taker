const express = require("express");

// Import our modular routers for /tips and /feedback
const apiNotesRouter = require("./apinotes");
// TODO: import your diagnostics route

const app = express();

app.use("/notes", apiNotesRouter);
// TODO: Initialize diagnostics route

module.exports = app;
