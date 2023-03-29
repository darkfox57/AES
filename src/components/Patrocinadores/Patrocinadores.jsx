import React from 'react'

import { Patrocinadores_Styled, Logos_Container } from './Patrocinadores.Styles'
import Button from '../../utils/Button'
import logoSponsor from '../../assets/Logo_Sponsor.png'
import mapa from '../../assets/mapa-ong-pup.svg'

const linkLogos = [logoSponsor, logoSponsor, logoSponsor]

export default function Patrocinadores() {
  return (
    <Patrocinadores_Styled image={mapa}>
      <div>
        <Button type="primary" link="/" text="Patrocinios" size="md"></Button>

        <Logos_Container>
          {linkLogos.slice(0, 7).map((logo, index) => (
            <img key={index} src={logo}></img>
          ))}
        </Logos_Container>
      </div>
    </Patrocinadores_Styled>
  )
}
