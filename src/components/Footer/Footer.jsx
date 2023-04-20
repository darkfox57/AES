import React from 'react'
import { NavLink } from 'react-router-dom'
import NewestBlogs from '../LastBlogs/NewestBlogs'
import { InfoContent } from '../Swiper_Home_Portada/About_Home'
import Contacto from './Contacto'
import Donacion from './Donacion'

import {
  FooterContainer,
  FooterContent,
  FooterMenu,
  LastBlogs,
} from './footer.styles'

export default function Footer() {
  const ScrollUp = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <FooterContainer>
      <Donacion />
      <Contacto />
      <FooterContent>
        <InfoContent />
        <FooterMenu>
          <h4>Educacion Sanitaria</h4>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Home
            </NavLink>
            <NavLink
              to="/acerca-de"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Acerca de
            </NavLink>
            <NavLink
              to="/involucrate"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Involucrate
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Blog
            </NavLink>
            <NavLink
              to="/evento"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Más
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              faqs
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Contacto
            </NavLink>
            <NavLink
              to="/faqs/donaciones"
              className={({ isActive }) => (isActive ? 'current' : 'navItem')}
              onClick={ScrollUp}
            >
              Donaciones
            </NavLink>
          </ul>
        </FooterMenu>
        <LastBlogs>
          <h4>Ultimas Entradas del blog</h4>
          <br />
          <NewestBlogs />
        </LastBlogs>
      </FooterContent>
      <br />
      <span>Copyright Por un Perú sano - {new Date().getFullYear()}</span>
    </FooterContainer>
  )
}
