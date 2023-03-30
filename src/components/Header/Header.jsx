import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-aes.png'
import { HeaderGrid } from './Header.Styled'
import Nav from './Nav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

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
  return (
    <HeaderGrid scrolled={scrolled}>
      <img
        src={logo}
        alt="Por un Perú Sano - organización sin fines de lucro"
      />
      <Nav />
    </HeaderGrid>
  )
}
export default Header
