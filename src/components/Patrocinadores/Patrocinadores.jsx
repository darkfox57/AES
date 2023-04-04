import React from 'react'
import { useLocation } from 'react-router'

import logoSponsor from '../../assets/Logo_Sponsor.png'
import mapa from '../../assets/mapa-ong-pup.svg'
import Button from '../../utils/Button/Button'
import { Logos_Container, Patrocinadores_Styled } from './Patrocinadores.Styles'

const linkLogos = [logoSponsor, logoSponsor, logoSponsor]

export default function Patrocinadores() {
  const location = useLocation()

  return (
    <Patrocinadores_Styled image={mapa}>
      {location.pathname !== '/acerca-de' && (
        <Button
          type="primary"
          link="/acerca-de"
          text="Organizaciones cooperadoras"
          size="md"
        />
      )}

      <Logos_Container>
        {linkLogos.slice(0, 7).map((logo, index) => (
          <img key={index} src={logo}></img>
        ))}
      </Logos_Container>
    </Patrocinadores_Styled>
  )
}
