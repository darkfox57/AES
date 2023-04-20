import React from 'react'
import brush from '../../assets/brush.svg'
import { PortadaContainer } from './Portada.Styled'
// recibe mision titulo principal arriba
// titulo el titulo grande
//y img fondo de portada
const Portada = ({ titulo, img }) => {
  return (
    <PortadaContainer Portada={img} brush={brush}>
      <div>
        <span>Nuestra Misión: Promover la salud integral</span>
        <h1>{titulo}</h1>
      </div>
    </PortadaContainer>
  )
}

export default Portada
