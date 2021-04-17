const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
// var json = {"title":"Test Title","text":"Test text","ID": "1"};
// var obj = JSON.parse(json);
// var notesEl = newNote
class Notes {
  read() {
    return readFile("db/db.json", "utf8");
  }
  write(note) {
    return writeFile("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((rawNotes) => {
      let notesArray = [];
      notesArray = notesArray.concat(JSON.parse(rawNotes));
      console.log(notesArray);
      return notesArray;
    });
  }
  addNotes(note) {
    const newNote = {
      title: title.value,
      text: text.value,
      id: uuidv4(),
    };
    return this.getNotes().then( notesArray => {
        [...notesArray, newNote]
    }).then(newArray => {
        this.write(newArray);
    }).then(() => newNote);
  }
}

module.exports = new Notes();
