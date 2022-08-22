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
        <button type='submit' className='btn add-btn'>
          Добавить запись
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  .add-form {
    width: 90vw;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  label {
    margin: 0.5rem 0;
  }
  .addTitleInput {
    width: 100%;
    height: 40px;
    background: rgba(155, 155, 155, 0.2);
    border-radius: 10px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .addTextInput {
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

export default AddNoteForm
