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
        <Link to={`/editNote/${id}`} className='btn'>
          Изменить
        </Link>
        <button onClick={onDeleteNote} className='btn-remove'>
          Удалить
        </button>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  margin: 0 auto;
  .btn {
    text-decoration: none;
    background: var(--black);
    color: var(--white);
    padding: 5px 10px;
  }
  .btn:hover {
    color: var(--gold);
  }
  .btn-remove {
    cursor: pointer;
    border: 1px solid black;
    font-size: 1.05rem;
    padding: 5px 10px;
    margin-left: 1rem;
  }
`

export default SingleNotePage
