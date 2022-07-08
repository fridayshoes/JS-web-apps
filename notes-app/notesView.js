class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  
    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });  
  }
  
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
  
  
  displayNotes() {
    // Remove all previous notes
  document.querySelectorAll('.note').forEach(element => {
    element.remove();
  });
    
    const notes = this.model.getNotes()

    // For each note, create and append a new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;