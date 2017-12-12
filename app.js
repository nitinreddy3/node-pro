console.log("Starting app...");

const fs = require('fs');
const _ = require('lodash');

const note = require('./notes');

var command = process.argv[2];
console.log('Command: ', command);

console.log(process.argv)

if(command === 'add') {
    console.log("Add new note");
} else if(command === "list") {
    console.log("Listing notes");
} else if(command === "read"){
    console.log("read a note");
} else if(command === "remove") {
    console.log("remove an item");
} else {
    console.log("Command not recognised");
}