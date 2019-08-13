const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    console.log(chalk.green.inverse("Added new note"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("Cannot add duplicate note"));
  }
};

const getNote = title => {
  console.log('getting note');
};

const getAll = () => {
  console.log('get all notes');
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  }else{
    console.log(chalk.red.inverse("No note found"));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json'));
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
