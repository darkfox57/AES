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

export default function Sidebar() {
  return (
    <>
      <SideBarContent>
        <img src={logo} alt="" />
        <ProfileMiniature>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt="Avatar de perfil para usuario administrador - Por un Perú Sano"
          />
          <div>
            <span>Juanito el del Barrio</span>
            <span>Editar Perfil</span>
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
              to="/dashboard/"
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
              to="/dashboard/"
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
              to="/dashboard/"
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
              to="/dashboard/blog"
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
              to="/dashboard/"
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
              to="/dashboard/"
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
              to="/dashboard/"
              className={({ isActive }) => (isActive ? 'current' : '')}
            >
              <i>
                <IoBuildOutline />
              </i>
              Configuración
            </NavLink>
          </li>
        </nav>
      </SideBarContent>
    </>
  )
}
