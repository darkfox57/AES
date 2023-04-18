import React from 'react'
import {
  IoCaretDownOutline,
  IoLogOutOutline,
  IoMailUnreadOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from 'react-icons/io5'
import { useNavigate } from 'react-router'
import Notifications from '../Notifications/Notifications'
import { HeaderNotifications, LogOut, ProfileMiniature } from './header.styles'

export default function Header({ user }) {
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
          src={user.avatar}
          alt="Avatar de perfil para usuario administrador - Por un Perú Sano"
        />
        <span>{user.firstname}</span>
        <i>
          <IoCaretDownOutline />
        </i>
        <LogOut
          onClick={() => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('user_id')
            navigate('/login')
          }}
        >
          <IoLogOutOutline />
        </LogOut>
      </ProfileMiniature>
    </>
  )
}
