import React from 'react'
import {
  IoBuildOutline,
  IoCalendarOutline,
  IoEarOutline,
  IoHeartOutline,
  IoImageOutline,
  IoMailUnreadOutline,
  IoNewspaperOutline,
  IoSpeedometerOutline,
} from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo-pups-color.webp'
import { ProfileMiniature, SideBarContent } from './sidebar.styled'

export default function Sidebar({ user }) {
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
        </nav>
      </SideBarContent>
    </>
  )
}
