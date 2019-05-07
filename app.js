const yargs = require('yargs');

// add, remove, read, list

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title'
        }
    },
    handler: function (argv) {
        console.log("Adding a new note", argv)
    }
});

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing the note");
    }
});

// read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function() {
        console.log("Reading the note");
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function() {
        console.log("Listing notes");
    }
});

// console.log(yargs.argv);


// const fs = require('fs');
// const notes = require('./notes');
// const _ = require('lodash');
// const yargs = require('yargs');

// const argv = yargs.argv;

// let command = argv._[0];

// if(command === 'add'){
//     notes.addNote(argv.title, argv.body);
// } else if (command === 'list'){
//     notes.getAll();
// } else if (command === 'read'){
//     notes.getNote(argv.title);
// } else if (command === 'remove'){
//     notes.removeNote(argv.title);
// } else {
//     console.log("command not recognised")
// }