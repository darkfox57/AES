import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router'

import axios from 'axios'

import AddBlog from './DashBoard/Pages/Blog/AddBlog/AddBlog'
import BlogDash from './DashBoard/Pages/Blog/BlogDash'
import EditBlog from './DashBoard/Pages/Blog/EditBlog/EditBlog'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Profile from './DashBoard/Pages/Dashboard/Profile/Profile'
import AddEvent from './DashBoard/Pages/Events/AddEvent/AddEvent'
import EditEvent from './DashBoard/Pages/Events/EditEvent/EditEvent'
import EventDash from './DashBoard/Pages/Events/EventDash'
import Login from './DashBoard/Pages/Login/Login'
import Header from './components/Header/Header'
import DashLayout from './layouts/DashLayout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/Blog/Detail/BlogArticle'
import Contacto from './pages/Contacto/Contacto'
import EventArticle from './pages/Evento/Detail/EventArticle'
import Evento from './pages/Evento/Evento'
import Faqs from './pages/FAQs/Faqs'
import Home from './pages/Home/Home'
import Involucrate from './pages/Involucrate/Involucrate'

import { isLoggedIn } from './utils/Auth/isLoggedIn'

import FaqDonacion from './pages/FaqDonacion/FaqDonacion'
import {
  getAllBlogs,
  getCategories,
  getTags,
} from './redux/actions/blog_actions'
import { getAllCategories, getAllEvents } from './redux/actions/event_actions'

axios.defaults.baseURL = 'https://backup-production.up.railway.app/'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const estado = useSelector((state) => state.account.status)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBlogs())
    dispatch(getCategories())
    dispatch(getTags())
    dispatch(getAllEvents())
    dispatch(getAllCategories())
  }, [])

  return (
    <>
      {location.pathname.includes('dashboard') ||
      location.pathname === '/login' ? (
        ''
      ) : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/involucrate" element={<Involucrate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/evento/:slug" element={<EventArticle />} />
        <Route path="/evento" element={<Evento />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/faqs/donaciones" element={<FaqDonacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="blog" element={<BlogDash />} />
          <Route path="blog/add-blog" element={<AddBlog />} />
          <Route path="blog/edit/:slug" element={<EditBlog />} />
          <Route path="eventos" element={<EventDash />} />
          <Route path="eventos/add-blog" element={<AddEvent />} />
          <Route path="eventos/edit/:slug" element={<EditEvent />} />
          <Route path="involucrate" element={<EventDash />} />
          <Route path="mensajes" element={<EventDash />} />
          <Route path="suscriptores" element={<EventDash />} />
          <Route path="banner" element={<EventDash />} />
          <Route path="configuracion" element={<EventDash />} />
          <Route path="perfil/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
