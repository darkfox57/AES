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
            <i>
              <IoSpeedometerOutline />
            </i>
            Dashboard
          </li>
          <li>
            <i>
              <IoHeartOutline />
            </i>
            Involucrate
          </li>
          <li>
            <i>
              <IoMailUnreadOutline />
            </i>
            Mensajes
          </li>
          <li>
            <i>
              <IoEarOutline />
            </i>
            Suscripciones
          </li>
          <li>
            <i>
              <IoNewspaperOutline />
            </i>
            Blogs
          </li>
          <li>
            <i>
              <IoCalendarOutline />
            </i>
            Eventos
          </li>
          <li>
            <i>
              <IoImageOutline />
            </i>
            Banner Principal
          </li>
          <li>
            <i>
              <IoBuildOutline />
            </i>
            Configuración
          </li>
        </nav>
      </SideBarContent>
    </>
  )
}
