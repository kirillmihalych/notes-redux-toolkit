import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [
    {
      id: '1',
      title: 'first note!',
      content: 'hello',
    },
    {
      id: '2',
      title: 'second note!',
      content: 'i am a note',
    },
  ],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.notes = [...state.notes, action.payload]
    },
    noteEdited(state, action) {
      const { id, title, text } = action.payload

      const currentNote = state.notes.find((note) => note.id === id)

      if (currentNote) {
        currentNote.title = title
        currentNote.content = text
      }
    },
    noteDeleted(state, action) {
      const id = action.payload
      const filteredNotes = state.notes.filter((note) => note.id !== id)

      state.notes = filteredNotes
    },
  },
})

export const { noteAdded, noteEdited, noteDeleted } = notesSlice.actions

export default notesSlice.reducer
