import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { noteDeleted } from './notesSlice'

const SingleNotePage = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  )

  const onDeleteNote = () => {
    dispatch(noteDeleted(id))
    navigate('/')
  }

  if (!note) {
    return (
      <section>
        <h2>Заметка не найдена!</h2>
      </section>
    )
  }

  return (
    <Wrapper>
      <article>
        <h2>{note.title}</h2>
        <p className='note-content'>{note.content}</p>
        <Link to={`/editNote/${id}`}>Изменить</Link>
        <button onClick={onDeleteNote}>Удалить</button>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default SingleNotePage
