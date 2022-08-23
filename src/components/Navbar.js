import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
      <section className='nav-content'>
        <h2 className='nav-title'>Заметки</h2>
        <div className='nav-links'>
          <Link to='/' className='nav-link'>
            Домой
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  background: rgba(238, 238, 238, 0.3);
  margin-bottom: 1rem;
  .nav-content {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-links {
    display: flex;
  }
  .nav-link {
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 10px;
    border-radius: 10px;
    background: var(--black);
    color: var(--white);
  }
  .nav-link:hover {
    color: var(--gold);
  }
`

export default Navbar
