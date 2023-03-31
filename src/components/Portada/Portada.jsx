import React from 'react'
import { PortadaContainer } from './Portada.Styled'
import About from '../../assets/About.webp'
const Portada = ({mision,titulo}) => {
  return (
    <PortadaContainer Portada={About}>
      <div>
        <p>{mision}</p>
        <h1>{titulo} </h1>
      </div>
    </PortadaContainer>
  )
}

export default Portada
