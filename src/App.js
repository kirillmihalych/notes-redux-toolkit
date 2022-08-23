import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import EditNoteForm from './features/notes/EditNoteForm'
import SingleNotePage from './features/notes/SingleNotePage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/notes/:id' element={<SingleNotePage />} />
        <Route path='/editNote/:id' element={<EditNoteForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
