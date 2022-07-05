class NotesModel{

constructor() {
  this.notes = [];
}

  getNotes() {
    return this.notes;
  }

  addNote(product) {
     this.notes.push(product)
     return this.notes
  }

  reset() {
    this.notes = []
  }
}


module.exports = NotesModel;