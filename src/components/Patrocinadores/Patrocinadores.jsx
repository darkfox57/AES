import React from 'react'
import { useSelector } from 'react-redux'
import mapa from '../../assets/mapa-ong-pup.svg'

import { Logos_Container, Patrocinadores_Styled } from './Patrocinadores.Styles'

export default function Patrocinadores() {
  const images = useSelector((state) => state.gallery.files)
  const logos = images.filter((file) => file.origin === 'logos')
  return (
    <Patrocinadores_Styled image={mapa}>
      <h2>Empresas aliadas</h2>
      <Logos_Container>
        {logos.slice(0, 7).map((logo) => (
          <img key={logo._id} src={logo.url}></img>
        ))}
      </Logos_Container>
    </Patrocinadores_Styled>
  )
}
