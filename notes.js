const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    notes.push({
        title,
        body
    });
    saveNotes(notes);
};

const getNote = title => {
  console.log('getting note');
};

const getAll = () => {
  console.log('get all notes');
};

const removeNote = title => {
  console.log('removing note');
};

const saveNotes = (notes) => {
    console.log(notes);
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
  try {
    const dataJson = JSON.parse(fs.readFileSync('notes.json'));
    return dataJson;
  } catch (e) {
      return [];
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
