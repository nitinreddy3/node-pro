"use strict";
console.log("Starting app...");
var fs = require('fs');
var _ = require('lodash');
var yargs = require('yargs');
var notes = require('./notes');
var argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}
else if (command === "list") {
    notes.getAll();
}
else if (command === "read") {
    notes.getNote(argv.title);
}
else if (command === "remove") {
    notes.removeNote(argv.title);
}
else {
    console.log("Command not recognised");
}
