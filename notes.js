console.log('Starting note.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log("Getting all the notes");
};

var getNote = (title) => {
    console.log("Get note ", title);
}

var removeNote = (title) => {
    console.log("Remove a note ", title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};