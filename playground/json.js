// let obj = {
//     name: "anmol"
// }

// let stringObj = JSON.stringify(obj)

// console.log(typeof stringObj);
// console.log(stringObj)

// let person = '{"name": "anmol", "age": 25}';
// person = JSON.parse(person);

// console.log(person.age);

const fs = require('fs');

let originalNote = {
    title: "title",
    body: "body"
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

let convertedNote = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof convertedNote)
console.log(convertedNote.title);