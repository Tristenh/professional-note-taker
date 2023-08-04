// required files
const apiNotes = require("express").Router();
const uuid = require("../helpers/uuid");
const fs = require("fs");
// GET route to fetch all routes
apiNotes.get("/", (req, res) => {
  // read existing notes from db.json
  const data = fs.readFileSync("./db/db.json");
  const parsedNotes = JSON.parse(data);
  res.json(parsedNotes);
});
//  POST route to add a new note
apiNotes.post("/", (req, res) => {
  const { title, text } = req.body;
  // create a new note
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    // reading existing db.json data
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        //  writing new notes to db.json
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
    // response to client about the new note
    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    // id req body does not have required data return error
    res.status(500).json("Error in posting note");
  }
});
// export router
module.exports = apiNotes;
