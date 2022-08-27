import { createSlice, nanoid } from '@reduxjs/toolkit'

const getFromLocalStorage = () => {
  let localStorageNotes = localStorage.getItem('notes')
  if (localStorageNotes) {
    return JSON.parse(localStorageNotes)
  } else {
    return [
      {
        id: '1',
        title: 'Я тут первая запись!',
        content: 'А я тут первый текст!',
      },
    ]
  }
}

const initialState = {
  notes: getFromLocalStorage(),
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action) {
        state.notes = [...state.notes, action.payload]

        localStorage.setItem('notes', JSON.stringify(state.notes))
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
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

export const selectAllNotes = (state) => state.notes.notes

export const { noteAdded, noteEdited, noteDeleted } = notesSlice.actions

export default notesSlice.reducer
