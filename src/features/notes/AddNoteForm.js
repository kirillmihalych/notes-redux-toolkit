import React, { useState } from 'react'
import styled from 'styled-components'

const AddNoteForm = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => e.preventDefault()
  const onTitleChanged = (e) => setTitle(e.target.value)
  const onTextChanged = (e) => setText(e.target.value)

  return (
    <Wrapper>
      <h2>Создать запись</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='noteTitle'>Имя записи: </label>
        <input
          type='text'
          name='noteTitle'
          id='noteTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='noteText'>Текст: </label>
        <textarea
          name='noteText'
          id='noteText'
          value={text}
          onChange={onTextChanged}
        ></textarea>
        <button type='submit'>Добавить запись</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default AddNoteForm
