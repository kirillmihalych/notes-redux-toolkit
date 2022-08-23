import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { noteEdited } from './notesSlice'

const EditNoteForm = () => {
  const { id } = useParams()

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  )

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
      <form className='add-form' onSubmit={handleSubmit}>
        <label htmlFor='noteTitle' className='label-title'>
          Имя записи:{' '}
        </label>
        <input
          type='text'
          name='noteTitle'
          id='noteTitle'
          value={title}
          onChange={onTitleChanged}
          className='addTitleInput'
        />
        <label htmlFor='noteText'>Текст: </label>
        <textarea
          name='noteText'
          id='noteText'
          value={text}
          onChange={onTextChanged}
          className='addTextInput'
        ></textarea>
        <button type='submit' className='btn add-btn' onClick={onSaveChanges}>
          Сохранить изменения
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default EditNoteForm
