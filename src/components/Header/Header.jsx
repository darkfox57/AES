import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/logo-aes.png'
import { Hamburguer, HeaderGrid } from './Header.Styled'

import Nav from './Nav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const OpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburguer scrolled={scrolled}>
        <GiHamburgerMenu onClick={OpenNav} />
      </Hamburguer>

      <HeaderGrid className={isOpen ? 'open' : ''} scrolled={scrolled}>
        <img
          src={logo}
          alt="Por un Perú Sano - organización sin fines de lucro"
        />
        <Nav OpenNav={OpenNav} />
      </HeaderGrid>
    </>
  )
}
export default Header
