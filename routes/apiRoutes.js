// LOAD DATA
const Notes = require("../db/Notes");
const db = require("../db/db.json");
const fs = require("fs");


// ROUTING

module.exports = (app) => {
  // API GET REQUEST
  app.get("/api/notes", (req, res) => {
    Notes.getNotes().then((data) => {
      res.json(data);
    });
  });
  app.post('/api/notes', (req,res) => {
      Notes.addNotes(req.body).then((data) => {
          res.json(data);
      });
  })
};
// API POST REQUEST

// 2 get routes that send a route. get 3 notes, new notes, delete.
