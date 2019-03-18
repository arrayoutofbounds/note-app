const addNote = (title, body) => {
    console.log(title, body);
}

const getNote = (title) => {
    console.log("getting note")
}

const getAll = () => {
    console.log("get all notes")
}

const removeNote = (title) => {
    console.log("removing note")
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}