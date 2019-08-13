const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// add, remove, read, list

//yargs.argv is the process.argv that yargs has parsed
yargs.version('1.0.0');

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body for the note to be added',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

// read command
yargs.command({
  command: 'read',
  describe: 'reading a note',
  handler: function() {
    console.log('Reading the note');
  }
});

// list command
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler: function() {
    console.log('Listing notes');
  }
});

yargs.parse();
