import React from 'react'
import { HeaderGrid } from './Header.Styled'
import Nav from './Nav'

const Header = () => {
  return (
    <HeaderGrid>
        <span>logo</span>
        <Nav/>
    </HeaderGrid>
  )
}
export default Header