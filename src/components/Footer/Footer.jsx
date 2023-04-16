import React from 'react'
import { InfoContent } from '../Swiper_Home_Portada/About_Home'
import Contacto from './Contacto'
import Donacion from './Donacion'
import NewestBlogs from '../LastBlogs/NewestBlogs'

import {
  FooterContainer,
  FooterContent,
  FooterMenu,
  LastBlogs,
} from './footer.styles'

export default function Footer() {
  return (
    <FooterContainer>
      <Donacion />
      <Contacto />
      <FooterContent>
        <InfoContent />
        <FooterMenu>
          <h4>Por un Perú Sano</h4>
          <ul>
            <li>Home</li>
            <li>Acerca de</li>
            <li>Involucrate</li>
            <li>Blog</li>
            <li>Más</li>
            <li>Contacto</li>
            <li>Donaciones</li>
          </ul>
        </FooterMenu>
        <LastBlogs>
          <h4>Ultimas Entradas del blog</h4>
          <br />
          <NewestBlogs />
        </LastBlogs>
      </FooterContent>
      <br />
      <span>Copyright Por un Perú sano - {new Date().getFullYear()}</span>
    </FooterContainer>
  )
}
