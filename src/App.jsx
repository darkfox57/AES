import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'

//Hahber si asi funciona
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" />
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
