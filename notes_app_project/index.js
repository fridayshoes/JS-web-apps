const NoteModel = require('./notesview.js')

console.log('The notepad app is running')

notemodel = new NoteModel
console.log(notemodel.getNotes())

