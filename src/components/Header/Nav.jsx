import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { ListNav, NavContainer } from './Nav.Styled'
import useScroll from '../../Hooks/useScrollTop'

const Nav = ({ OpenNav, showSelect }) => {
  const token = localStorage.getItem('access_token')

  const handleClick = () => {
    OpenNav()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  
  const ScrollUp = () => {
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
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/acerca-de'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/involucrate'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Involucrate
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/blog'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/evento'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/faqs'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            FAQ's
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contacto'}
            onClick={showSelect ? handleClick : ScrollUp}
            className={({ isActive }) => (isActive ? 'current' : '')}
          >
            Contacto
          </NavLink>
        </li>
        <div className="buttonsNav">
          <Button
            funtion={showSelect ? handleClick : ''}
            type="primary"
            size="md"
            text="Haz una donación"
            link="/faqs/donaciones"
          />
          {token && (
            <Button
              funtion={showSelect ? handleClick : ''}
              type="secondary"
              size="md"
              text="Admin"
              link="/dashboard"
            />
          )}
        </div>
      </ListNav>
    </NavContainer>
  )
}

export default Nav
