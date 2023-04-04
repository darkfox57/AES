import React from 'react'
import {
  IoCaretDownOutline,
  IoMailUnreadOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from 'react-icons/io5'
import { HeaderNotifications, ProfileMiniature } from './header.styles'

export default function Header() {
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
      </ProfileMiniature>
    </>
  )
}
