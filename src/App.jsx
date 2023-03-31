import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Login from './DashBoard/Pages/Login/Login'
import { useLocation } from 'react-router'

import Home from './pages/Home/Home'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/dashboard/login' ? '' : <Header />}

      <Routes>
        <Route path="/dashboard/login" element={<Login />}></Route>
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
