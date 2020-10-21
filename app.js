//Waseemjaved/deskop
const yargs = require('yargs');

const modules = require('./notes');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add new Task',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        modules.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Remove a note',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv) => {
        modules.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing out all your notes',
    handler: () => {
        modules.listNotes();
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a List',
    builder: {
        title: {
            describe: 'Read a Specific note',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        modules.readNote(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv)