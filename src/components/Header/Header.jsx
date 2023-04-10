import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/logo-aes.png'
import { Hamburguer, HeaderGrid } from './Header.Styled'

import Nav from './Nav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

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

  const handleHamburgue = () => {
    !visible ? setVisible(true) : setVisible(false)
  }
  return (
    <>
      <Hamburguer scrolled={scrolled}>
        <GiHamburgerMenu onClick={handleHamburgue} />
      </Hamburguer>
      <HeaderGrid scrolled={scrolled} visible={visible}>
        <img
          src={logo}
          alt="Por un Perú Sano - organización sin fines de lucro"
        />
        <Nav ToogleHambur={handleHamburgue} />
      </HeaderGrid>
    </>
  )
}
export default Header
