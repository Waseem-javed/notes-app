const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return 'get notes';
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)


    if (!duplicateNote) {
        notes.push({title:title,body:body})
        saveNotes(notes);
        console.log(chalk.bgGreen.white.bold('Successfull Added'))
    } else {
        console.log(chalk.bgRed.white.bold('Note Title Taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > keepNotes.length) {
        console.log(chalk.green.inverse.bold('Note Removed!'))
        saveNotes(keepNotes);
    } else {
        console.log(chalk.bgRed.white.bold('Note not Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Note List:'));
    return notes.forEach((note)=> console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes();
    const getNote = notes.find((note) => note.title === title);
    if (getNote) {
        console.log(chalk.green.inverse('Read Note =>'));
        console.log(chalk.red.inverse.bold('Title : '),getNote.title )
        console.log(chalk.red.inverse.bold('Body : '),getNote.body ) 
    } else {
        console.log(chalk.red.inverse('Not Read Note'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('books.json', dataJSON);
}

const loadNotes = () => {

    try {
        const bufferData = fs.readFileSync('books.json');
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
          
}


module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}