import React from 'react'

import logoSponsor from '../../assets/Logo_Sponsor.png'
import mapa from '../../assets/mapa-ong-pup.svg'
import Button from '../../utils/Button'
import { Logos_Container, Patrocinadores_Styled } from './Patrocinadores.Styles'

const linkLogos = [logoSponsor, logoSponsor, logoSponsor]

export default function Patrocinadores() {
  return (
    <Patrocinadores_Styled image={mapa}>
      <Button type="primary" link="/" text="Patrocinios" size="md" />
      <Logos_Container>
        {linkLogos.slice(0, 7).map((logo, index) => (
          <img key={index} src={logo}></img>
        ))}
      </Logos_Container>
    </Patrocinadores_Styled>
  )
}
