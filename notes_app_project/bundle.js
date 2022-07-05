(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // model.js
  var require_model = __commonJS({
    "model.js"(exports, module) {
      var NotesModel = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(product) {
          this.notes.push(product);
          return this.notes;
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel;
    }
  });

  // index.js
  var NoteModel = require_model();
  console.log("The notepad app is running");
  notemodel = new NoteModel();
  console.log(notemodel.getNotes());
})();
