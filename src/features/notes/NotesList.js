import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { noteDeleted } from './notesSlice'

const NotesList = () => {
  const dispatch = useDispatch()

  const notes = useSelector((state) => state.notes.notes)

  return (
    <Wrapper>
      {notes.map((note) => {
        return (
          <article key={note.id}>
            <h3>Имя: {note.title}</h3>
            <p>Текст: {note.content.substring(0, 100)}</p>
            <Link to={`/notes/${note.id}`}>Клик</Link>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default NotesList
