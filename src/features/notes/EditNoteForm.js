import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { noteEdited } from './notesSlice'
import { selectAllNotes } from './notesSlice'

const EditNoteForm = () => {
  const { id } = useParams()
  const notes = useSelector(selectAllNotes)

  const note = notes.find((note) => note.id === id)

  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.content)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => e.preventDefault()
  const onTitleChanged = (e) => setTitle(e.target.value)
  const onTextChanged = (e) => setText(e.target.value)

  const onSaveChanges = () => {
    if (title && text) {
      dispatch(noteEdited({ id, title, text }))
      navigate(`/notes/${id}`)
    }
  }

  return (
    <Wrapper>
      <h2>Изменить запись</h2>
      <form className='edit-form' onSubmit={handleSubmit}>
        <label htmlFor='noteTitle' className='label-title'>
          Имя записи:{' '}
        </label>
        <input
          type='text'
          name='noteTitle'
          id='noteTitle'
          value={title}
          onChange={onTitleChanged}
          className='editTitleInput'
        />
        <label htmlFor='noteText'>Текст: </label>
        <textarea
          name='noteText'
          id='noteText'
          value={text}
          onChange={onTextChanged}
          className='editTextInput'
        ></textarea>
        <button type='submit' className='btn add-btn' onClick={onSaveChanges}>
          Сохранить изменения
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  margin: 0 auto;
  .edit-form {
    width: 90vw;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
  }
  label {
    font-size: 1.25rem;
  }
  .editTitleInput {
    width: 100%;
    height: 40px;
    background: rgba(155, 155, 155, 0.2);
    border-radius: 10px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .editTextInput {
    resize: none;
    outline: none;
    border: none;
    background: rgba(155, 155, 155, 0.2);
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 10px;
    width: 100%;
    height: 50px;
    font-weight: 100;
    font-size: 1.15rem;
  }
  .btn {
    cursor: pointer;
    border: none;
    padding: 10px 30px;
    font-size: 1rem;
    background: var(--black);
    color: var(--gold);
    font-weight: bold;
  }
  .btn:hover {
    background: var(--dark-red);
  }
`

export default EditNoteForm
