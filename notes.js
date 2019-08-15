const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    console.log(chalk.green.inverse('Added new note'));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse('Cannot add duplicate note'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if(note){
    console.log(chalk.green(`Note found ${note.title} ${note.body}`));
  }else{
    console.log(chalk.red(`Note not found`));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found'));
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json'));
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote
};
