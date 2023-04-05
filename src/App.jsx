import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import BlogDash from './DashBoard/Pages/Blog/BlogDash'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Login from './DashBoard/Pages/Login/Login'
import Header from './components/Header/Header'
import DashLayout from './layouts/DashLayout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/Blog/Detail/BlogArticle'
import Contacto from './pages/Contacto/Contacto'
import Faqs from './pages/FAQs/Faqs'
import Involucrate from './pages/Involucrate/Involucrate'

import AddBlog from './DashBoard/Pages/Blog/AddBlog/AddBlog'

import axios from 'axios'
import EventoForm from './components/EventoArticleForm/EventoForm'
import Home from './pages/Home/Home'
axios.defaults.baseURL = 'https://backup-production.up.railway.app/'

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
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/evento/:slug" element={<EventoForm />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="blog" element={<BlogDash />} />
          <Route path="add-blog" element={<AddBlog />} />
        </Route>
        <Route path="/dashboard/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
