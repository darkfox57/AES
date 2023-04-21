import React, { useState } from 'react'
import {
  IoBuildOutline,
  IoCalendarOutline,
  IoEarOutline,
  IoHeartOutline,
  IoImageOutline,
  IoMailUnreadOutline,
  IoNewspaperOutline,
  IoPeopleOutline,
  IoSpeedometerOutline,
} from 'react-icons/io5'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo-pups-color.webp'
import { ProfileMiniature, SideBarContent } from './sidebar.styled'

export default function Sidebar({ user }) {
  const [expand, setExpand] = useState(false)
  const location = useLocation()
  const user_role = localStorage.getItem('user_role')

  return (
    <>
      <SideBarContent>
        <img src={logo} alt="" />
        <ProfileMiniature>
          <img
            src={user.avatar}
            alt="Avatar de perfil para usuario administrador - Por un Perú Sano"
          />
          <div>
            <span>
              {user.firstname} {user.lastname}
            </span>
            <Link to={`perfil/${user._id}`}>Editar Perfil</Link>
          </div>
        </ProfileMiniature>
        <nav>
          <li>
            <NavLink
              to="/dashboard/"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoSpeedometerOutline />
              </i>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoNewspaperOutline />
              </i>
              Blogs
            </NavLink>
            <div
              className={`menuItems ${
                location.pathname.includes('blog') ? 'expand' : ''
              }`}
            >
              <NavLink to="blog/add-blog">Nuevo Blog</NavLink>
              <NavLink to="blog/categorias">Categorías</NavLink>
              <NavLink to="blog/tags">Etiquedas</NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="eventos"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoCalendarOutline />
              </i>
              Eventos
            </NavLink>
            <div
              className={`menuItems ${
                location.pathname.includes('eventos') ? 'expand' : ''
              }`}
            >
              <NavLink to="eventos/add-event">Nuevo Evento</NavLink>
              <NavLink to="eventos/categorias">Categorías</NavLink>
              <NavLink to="eventos/tags">Etiquedas</NavLink>
              <NavLink to="eventos/participantes">Participantes</NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="involucrate"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoHeartOutline />
              </i>
              Involucrate
            </NavLink>
            <div
              className={`menuItems ${
                location.pathname.includes('involucrate') ? 'expand' : ''
              }`}
            >
              <NavLink to="involucrate/especialistas">Especialistas</NavLink>
              <NavLink to="involucrate/instituciones">Instituciones</NavLink>
              <NavLink to="involucrate/alianzas">Organizaciones</NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="mensajes"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoMailUnreadOutline />
              </i>
              Mensajes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="suscriptores"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoEarOutline />
              </i>
              Suscripciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="banner"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoImageOutline />
              </i>
              Banner Principal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="galeria-involucrate"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoImageOutline />
              </i>
              Galleria Involucrate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="videos"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoImageOutline />
              </i>
              Testimonios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="logos"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoImageOutline />
              </i>
              Logos
            </NavLink>
          </li>
          {user_role !== 'editor' && (
            <li>
              <NavLink
                to="cuentas"
                className={({ isActive }) => (isActive ? 'current' : '')}
              >
                <i>
                  <IoPeopleOutline />
                </i>
                Usuarios
              </NavLink>
            </li>
          )}
        </nav>
      </SideBarContent>
    </>
  )
}
