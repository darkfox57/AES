import React from 'react'

import logoHenry from '../../assets/Logo-Henry.png'
import mapa from '../../assets/mapa-ong-pup.svg'

import { Logos_Container, Patrocinadores_Styled } from './Patrocinadores.Styles'

const linkLogos = [logoHenry, logoHenry, logoHenry]

export default function Patrocinadores() {
  return (
    <Patrocinadores_Styled image={mapa}>
      <Logos_Container>
        {linkLogos.slice(0, 7).map((logo, index) => (
          <img key={index} src={logo}></img>
        ))}
      </Logos_Container>
    </Patrocinadores_Styled>
  )
}
