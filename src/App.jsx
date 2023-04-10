import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import Home from './pages/Home/Home'
import AddBlog from './DashBoard/Pages/Blog/AddBlog/AddBlog'
import BlogDash from './DashBoard/Pages/Blog/BlogDash'
import EditBlog from './DashBoard/Pages/Blog/EditBlog/EditBlog'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Login from './DashBoard/Pages/Login/Login'
import Header from './components/Header/Header'
import DashLayout from './layouts/DashLayout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/Blog/Detail/BlogArticle'
import Contacto from './pages/Contacto/Contacto'
import Evento from './pages/Evento/Evento'
import Faqs from './pages/FAQs/Faqs'
import Involucrate from './pages/Involucrate/Involucrate'
import EventArticle from './pages/Evento/Detail/EventArticle'

import { isLoggedIn } from './utils/Auth/isLoggedIn'

import { getAllBlogs, getCategories } from './redux/actions/blog_actions'

axios.defaults.baseURL = 'https://backup-production.up.railway.app/'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const estado = useSelector((state) => state.account.status)
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  useEffect(() => {
    if (!token && location.pathname.includes('dashboard')) navigate('/login')
    if (token && location.pathname.includes('login')) navigate('/dashboard')
  }, [token])

  useEffect(() => {
    dispatch(getAllBlogs())
    dispatch(getCategories())
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
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="blog" element={<BlogDash />} />
          <Route path="blog/add-blog" element={<AddBlog />} />
          <Route path="blog/edit/:slug" element={<EditBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
