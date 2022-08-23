import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleNotePage = () => {
  let { id } = useParams()

  const note = useSelector((state) =>
    state.notes.find((note) => note.id === id)
  )

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
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default SingleNotePage
