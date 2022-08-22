import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NotesList = () => {
  const notes = useSelector((state) => state.notes)

  return (
    <Wrapper>
      {notes.map((note) => {
        return (
          <article key={note.id}>
            <h3>Title: {note.title}</h3>
            <p>Note: {note.content}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default NotesList
