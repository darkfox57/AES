import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-aes.png'
import { Hamburguer, HeaderGrid } from './Header.Styled'
import { GiHamburgerMenu } from 'react-icons/gi';

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
  const handleHamburgue = ()=>{
    !visible ? setVisible(true) : setVisible(false)
  }
  return (
    <>
    <Hamburguer>
      <GiHamburgerMenu onClick={handleHamburgue}/>
    </Hamburguer>
    <HeaderGrid scrolled={scrolled} visible={visible} >
      <img
        src={logo}
        alt="Por un Perú Sano - organización sin fines de lucro"
      />
      <Nav />
    </HeaderGrid>
    </>
  )
}
export default Header
