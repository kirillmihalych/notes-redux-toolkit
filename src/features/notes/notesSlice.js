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
  reducers: {},
})

export default notesSlice.reducer
