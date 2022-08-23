import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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
]

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.push(action.payload)
    },
    noteEdited(state, action) {
      const { id, title, text } = action.payload

      const currentNote = state.find((note) => note.id === id)

      if (currentNote) {
        currentNote.title = title
        currentNote.content = text
      }
    },
  },
})

export const { noteAdded, noteEdited } = notesSlice.actions

export default notesSlice.reducer
