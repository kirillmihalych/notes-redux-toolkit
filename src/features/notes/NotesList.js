import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes)

  return (
    <Wrapper>
      {notes.map((note) => {
        return (
          <article key={note.id} className='single-note'>
            <h3>{note.title}</h3>
            <p>{note.content.substring(0, 100)}</p>
            <Link to={`/notes/${note.id}`} className='btn'>
              Открыть
            </Link>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  .single-note {
    background: rgba(238, 238, 238, 0.5);
    padding: 20px;
  }
  .btn {
    text-decoration: none;
    background: var(--black);
    color: var(--white);
    padding: 5px 10px;
  }
  .btn:hover {
    color: var(--gold);
  }
`

export default NotesList
