import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleNotePage from './features/notes/SingleNotePage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/notes/:id' element={<SingleNotePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
