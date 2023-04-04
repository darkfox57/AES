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
import { Link } from 'react-router-dom'
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
            <Link to="/dashboard/">
              <i>
                <IoSpeedometerOutline />
              </i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoHeartOutline />
              </i>
              Involucrate
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoMailUnreadOutline />
              </i>
              Mensajes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoEarOutline />
              </i>
              Suscripciones
            </Link>
          </li>
          <li>
            <Link to="/dashboard/blog">
              <i>
                <IoNewspaperOutline />
              </i>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoCalendarOutline />
              </i>
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoImageOutline />
              </i>
              Banner Principal
            </Link>
          </li>
          <li>
            <Link to="/dashboard/">
              <i>
                <IoBuildOutline />
              </i>
              Configuración
            </Link>
          </li>
        </nav>
      </SideBarContent>
    </>
  )
}
