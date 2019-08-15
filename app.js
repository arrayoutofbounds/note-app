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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// read command
yargs.command({
  command: 'read',
  describe: 'reading a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// list command
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.listNotes(argv.title);
  }
});

yargs.parse();
