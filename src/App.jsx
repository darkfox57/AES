import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { getAllAreas } from './redux/actions/dash_forms_actions'

import axios from 'axios'

import AddBlog from './DashBoard/Pages/Blog/AddBlog/AddBlog'
import BlogDash from './DashBoard/Pages/Blog/BlogDash'
import EditBlog from './DashBoard/Pages/Blog/EditBlog/EditBlog'
import Categories from './DashBoard/Pages/Categories/Categories'
import AllUsers from './DashBoard/Pages/Dashboard/Account/AllUsers'
import NewAccount from './DashBoard/Pages/Dashboard/Account/NewAccount'
import Dashboard from './DashBoard/Pages/Dashboard/Dashboard'
import Profile from './DashBoard/Pages/Dashboard/Profile/Profile'
import AddEvent from './DashBoard/Pages/Events/AddEvent/AddEvent'
import EditEvent from './DashBoard/Pages/Events/EditEvent/EditEvent'
import EventDash from './DashBoard/Pages/Events/EventDash'
import Participats from './DashBoard/Pages/Events/Participants/Participants'
import AddImage from './DashBoard/Pages/Gallery/AddImage/AddImage'
import EditImg from './DashBoard/Pages/Gallery/EditImg/EditImg'
import Gallery from './DashBoard/Pages/Gallery/Gallery'
import Institution_Detail from './DashBoard/Pages/Involucrate/Institutions/Detail/Institution_Detail'
import Institutions from './DashBoard/Pages/Involucrate/Institutions/Institutions'
import InvolucrateDash from './DashBoard/Pages/Involucrate/Involucrate'
import Organization_Detail from './DashBoard/Pages/Involucrate/Oganizations/Detail/Organization_Detail'
import Organizations from './DashBoard/Pages/Involucrate/Oganizations/Organizacions'
import Specialist_Detail from './DashBoard/Pages/Involucrate/Specialists/Detail/Specialist_Detail'
import Specialists from './DashBoard/Pages/Involucrate/Specialists/Specialists'
import InvolucrateDashMain from './DashBoard/Pages/Involucrate/page/Involucrate'
import Login from './DashBoard/Pages/Login/Login'
import MessageDetail from './DashBoard/Pages/Messages/MessageDetail/MessageDetail'
import Messages from './DashBoard/Pages/Messages/Messages'
import AddSlider from './DashBoard/Pages/Slider/AddSlider/AddSlider'
import EditSlider from './DashBoard/Pages/Slider/EditSlider/EditSlider'
import Slider from './DashBoard/Pages/Slider/Slider'
import Suscriptions from './DashBoard/Pages/Suscripciones/Sucriptions'
import Tags from './DashBoard/Pages/Tags/Tags'
import AddVideo from './DashBoard/Pages/Videos/AddVideo/AddVideo'
import EditVideo from './DashBoard/Pages/Videos/EditVideo/EditVideo'
import Videos from './DashBoard/Pages/Videos/Videos'
import AddLogo from './DashBoard/Pages/logos/AddLogo/AddLogo'
import Logos from './DashBoard/Pages/logos/logos'
import Header from './components/Header/Header'
import DashLayout from './layouts/DashLayout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/Blog/Detail/BlogArticle'
import Contacto from './pages/Contacto/Contacto'
import Desuscripcion from './pages/Desuscripcion/Desuscripcion'
import EventArticle from './pages/Eventos/Detail/EventArticle'
import Eventos from './pages/Eventos/Eventos'
import Faqs from './pages/FAQs/Faqs'
import FaqDonacion from './pages/FaqDonacion/FaqDonacion'
import Home from './pages/Home/Home'
import Involucrate from './pages/Involucrate/Involucrate'

import {
  getAllBlogs,
  getCategories,
  getTags,
} from './redux/actions/blog_actions'
import { getAllCategories, getAllEvents } from './redux/actions/event_actions'
import { getAllFiles } from './redux/actions/gallery_actions'
import { isLoggedIn } from './utils/Auth/isLoggedIn'

axios.defaults.baseURL = 'https://api.educacionsanitaria.org/'
// axios.defaults.baseURL = 'https://backup-production.up.railway.app/'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBlogs())
    dispatch(getCategories())
    dispatch(getTags())
    dispatch(getAllEvents())
    dispatch(getAllCategories())
    dispatch(getAllAreas())
    dispatch(getAllFiles())
  }, [])

  return (
    <>
      {location.pathname.includes('dashboard') ||
      location.pathname === '/login' ||
      location.pathname === '/desuscripcion' ? (
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
        <Route path="/evento" element={<Eventos />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/faqs/donaciones" element={<FaqDonacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/desuscripcion" element={<Desuscripcion />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="blog" element={<BlogDash />} />
          <Route path="blog/categorias" element={<Categories />} />
          <Route path="blog/tags" element={<Tags />} />
          <Route path="blog/add-blog" element={<AddBlog />} />
          <Route path="blog/edit/:slug" element={<EditBlog />} />
          <Route path="eventos" element={<EventDash />} />
          <Route path="eventos/categorias" element={<Categories />} />
          <Route path="eventos/tags" element={<Tags />} />
          <Route path="eventos/add-event" element={<AddEvent />} />
          <Route path="eventos/edit/:slug" element={<EditEvent />} />
          <Route path="eventos/participantes" element={<Participats />} />
          <Route path="involucrate" element={<InvolucrateDash />} />
          <Route path="involucrate/" element={<InvolucrateDashMain />} />
          <Route path="involucrate/instituciones" element={<Institutions />} />
          <Route
            path="involucrate/instituciones/:id"
            element={<Institution_Detail />}
          />
          <Route path="involucrate/alianzas" element={<Organizations />} />
          <Route
            path="involucrate/alianzas/:id"
            element={<Organization_Detail />}
          />
          <Route path="involucrate/especialistas" element={<Specialists />} />
          <Route
            path="involucrate/especialistas/:id"
            element={<Specialist_Detail />}
          />
          <Route path="mensajes" element={<Messages />} />
          <Route path="mensajes/:id" element={<MessageDetail />} />
          <Route path="suscriptores" element={<Suscriptions />} />
          <Route path="banner" element={<Slider />} />
          <Route path="banner/add-banner" element={<AddSlider />} />
          <Route path="banner/edit/:id" element={<EditSlider />} />
          <Route path="galeria-involucrate" element={<Gallery />} />
          <Route path="galeria-involucrate/add" element={<AddImage />} />
          <Route path="galeria-involucrate/edit/:id" element={<EditImg />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/add" element={<AddVideo />} />
          <Route path="videos/edit/:id" element={<EditVideo />} />
          <Route path="logos" element={<Logos />} />
          <Route path="logos/add" element={<AddLogo />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="cuentas" element={<AllUsers />} />
          <Route path="perfil/new" element={<NewAccount />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
