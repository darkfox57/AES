import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { ListNav, NavContainer } from './Nav.Styled'

const Nav = ({ToogleHambur}) => {
  const token = localStorage.getItem('access_token')

  const handleClick = () => { 
    ToogleHambur()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
     
    }, 100)
    
  }
  return (
    <NavContainer>
      <ListNav>
        <li>
          <NavLink
            to="/"
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/acerca-de'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/involucrate'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Involucrate
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/blog'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/evento'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/faqs'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            FAQ's
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contacto'}
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <Button type="primary" size="md" text="Haz una donación" link="/" />
          {token && (
            <Button type="secondary" size="md" text="Admin" link="/dashboard" />
          )}
        </li>
      </ListNav>
    </NavContainer>
  )
}

export default Nav
