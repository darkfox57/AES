import React from 'react'
import Button from '../../utils/Button'
import { ListNav, NavContainer } from './Nav.Styled'

const Nav = () => {
  return (
    <NavContainer>
      <ListNav>
        <li>Home</li>
        <li>Acerca de</li>
        <li>Involucrate</li>
        <li>Blog</li>
        <li>Más</li>
        <li>Contacto</li>
        <li>
          <Button type="primary" size="md" text="Haz una donación" link="/" />
        </li>
        <li>
          <Button type="primary" size="md" text="Login" link="/" />
        </li>
      </ListNav>
    </NavContainer>
  )
}

export default Nav
