/**
 * @jest-environment jsdom
 */

const fs = require('fs'); //provides functionality to access interact with filesystem
const NotesView = require('./notesview')

describe('NotesView', () => {
  describe('getNotes', () => {
    it('Will return a empty array', () => {
      notes = new NotesView
      expect(notes.getNotes()).toEqual([])
    })

    describe('addNote', () => {
      it('Will add a note to the array', () => {
        notes = new NotesView
        expect(notes.addNote('Buy Milk')).toEqual(['Buy Milk'])
      })
      it('Will add multiple notes to the array', () => {
        notes = new NotesView
        notes.addNote('Buy Milk')
        notes.addNote('Go to the gym')
        expect(notes.addNote()).toEqual(['Buy Milk','Go to the gym'])
      })
      describe('getNotes', () => {
        it('Will return the list of items', () => {
          notes = new NotesView
          notes.addNote('Buy Milk')
          notes.addNote('Go to the gym')
          expect(notes.getNotes()).toEqual(['Buy Milk','Go to the gym'])
        }) 
      })
      describe('getNotes', () => {
        it('Will add notes and then reset list of notes', () => {
          notes = new NotesView
          notes.addNote('Buy Milk')
          notes.addNote('Go to the gym')
          notes.reset()
          expect(notes.getNotes()).toEqual([])
        }) 
      })
      describe('getNotes', () => {
        it('Will add notes, reset list, then add a new note', () => {
          notes = new NotesView
          notes.addNote('Buy Milk')
          notes.addNote('Go to the gym')
          notes.reset()
          notes.addNote('Walk dog')
          expect(notes.getNotes()).toEqual(['Walk dog'])
        }) 
      })
    })
  })
})