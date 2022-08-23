import React from 'react'
import AddNoteForm from '../features/notes/AddNoteForm'
import NotesList from '../features/notes/NotesList'

const Home = () => {
  return (
    <>
      <AddNoteForm />
      <NotesList />
    </>
  )
}

export default Home
