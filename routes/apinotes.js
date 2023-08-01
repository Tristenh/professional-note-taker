const apiNotes = require("express").Router();
const uuid = require("../helpers/uuid");

const fs = require("fs");

apiNotes.get("/", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const parsedNotes = JSON.parse(data);
  res.json(parsedNotes);
});

apiNotes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedNotes, null, 2),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated note!")
        );
      }
    });

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting note");
  }
});
module.exports = apiNotes;
