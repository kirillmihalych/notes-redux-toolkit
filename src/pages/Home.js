import React from 'react'
import AddNoteForm from '../features/notes/AddNoteForm'
import NotesList from '../features/notes/NotesList'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <AddNoteForm />
      <NotesList />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Home
