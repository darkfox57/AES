import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { ListNav, NavContainer } from './Nav.Styled'

const Nav = () => {
  return (
    <NavContainer>
      <ListNav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={'/acerca-de'}>Acerca de</Link>
        </li>
        <li>
          <Link to={'/involucrate'}>Involucrate</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/mas'}>Más</Link>
        </li>
        <li>
          <Link to={'/contacto'}>Contacto</Link>
        </li>
        <li>
          <Button type="primary" size="md" text="Haz una donación" link="/" />
        </li>
        <li>
          <Button
            type="primary"
            size="md"
            text="Login"
            link="/dashboard/login"
          />
        </li>
      </ListNav>
    </NavContainer>
  )
}

export default Nav
