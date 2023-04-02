import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Login from './DashBoard/Pages/Login/Login'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contacto from './pages/Contacto/Contacto'
import Involucrate from './pages/Involucrate/Involucrate'
import Mas from './pages/Mas/Mas'

import Home from './pages/Home/Home'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname.includes('dashboard') ? '' : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/involucrate" element={<Involucrate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" />
        <Route path="/mas" element={<Mas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
