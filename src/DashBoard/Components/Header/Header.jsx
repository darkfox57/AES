import React from 'react'
import {
  IoCaretDownOutline,
  IoLogOutOutline,
  IoMailUnreadOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { HeaderNotifications, LogOut, ProfileMiniature } from './header.styles'

export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <HeaderNotifications>
        <i>
          <IoMailUnreadOutline />
        </i>
        <i>
          <IoNotificationsOutline />
        </i>
        <i>
          <IoSearchOutline />
        </i>
      </HeaderNotifications>
      <ProfileMiniature>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="Avatar de perfil para usuario administrador - Por un Perú Sano"
        />
        <span>Juanito</span>
        <i>
          <IoCaretDownOutline />
        </i>
        <LogOut
          onClick={() => {
            localStorage.removeItem('access_token')
            navigate('/login')
          }}
        >
          <IoLogOutOutline />
        </LogOut>
      </ProfileMiniature>
    </>
  )
}
