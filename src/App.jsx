import React from 'react'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
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
