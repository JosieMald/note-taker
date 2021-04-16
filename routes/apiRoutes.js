// LOAD DATA
const notes = require('../db/db.json')

// ROUTING

module.exports = (app) => {

    // API GET REQUEST
    app.get('/api/notes', (req, res) => {
        false.readFile("./db/db.json", "utf-8", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(notes))});
        })
}
// API POST REQUEST

// 2 get routes that send a route. get 3 notes, new notes, delete.