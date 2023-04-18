import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/logo-aes.png'
import { Hamburguer, HeaderGrid } from './Header.Styled'

import Nav from './Nav'
import useConditionalRender from '../../Hooks/useConditionalRender'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const [showSelect] = useConditionalRender(1378)

  useEffect(() => {
    if (!showSelect) {
      setIsOpen(false)
    }
  }, [showSelect])
  
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
      <Hamburguer scrolled={scrolled} isOpen={isOpen} >
        <GiHamburgerMenu onClick={OpenNav} />
      </Hamburguer>

      <HeaderGrid className={isOpen ? 'open' : ''} scrolled={scrolled}>
        <img
          src={logo}
          alt="Por un Perú Sano - organización sin fines de lucro"
        />
        <Nav OpenNav={OpenNav} showSelect={showSelect} />
      </HeaderGrid>
    </>
  )
}
export default Header
