import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { ListNav, NavContainer } from './Nav.Styled'

const Nav = () => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <NavContainer>
      <ListNav>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/acerca-de'} onClick={handleClick}>
            Acerca de
          </Link>
        </li>
        <li>
          <Link to={'/involucrate'} onClick={handleClick}>
            Involucrate
          </Link>
        </li>
        <li>
          <Link to={'/blog'} onClick={handleClick}>
            Blog
          </Link>
        </li>
        <li>
          <Link to={'/faqs'} onClick={handleClick}>
            FAQ's
          </Link>
        </li>
        <li>
          <Link to={'/contacto'} onClick={handleClick}>
            Contacto
          </Link>
        </li>
        <li>
          <Button type="primary" size="md" text="Haz una donación" link="/" />
        </li>
      </ListNav>
    </NavContainer>
  )
}

export default Nav
