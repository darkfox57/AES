import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import About from './pages/About/About'

import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<About/>}/>
        <Route path="/involucrate" />
        <Route path="/blog" />
        <Route path="/blog:slug" />
        <Route path="/mas" />
        <Route path="/contacto" />
      </Routes>
    </>
  )
}

export default App
