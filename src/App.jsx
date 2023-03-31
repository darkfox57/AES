import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import AddBlog from './DashBoard/Pages/AddBlog/AddBlog'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Login from './DashBoard/Pages/Login/Login'
import Header from './components/Header/Header'
import About from './pages/About/About'

import Home from './pages/Home/Home'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname.includes('dashboard') ? '' : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/involucrate" />
        <Route path="/blog" />
        <Route path="/blog:slug" />
        <Route path="/mas" />
        <Route path="/contacto" />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
