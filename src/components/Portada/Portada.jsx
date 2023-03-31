import React from 'react'
import { PortadaContainer } from './Portada.Styled'
// recibe mision titulo principal arriba 
// titulo el titulo grande 
//y img fondo de portada
const Portada = ({mision,titulo,img}) => {
  return (
    <PortadaContainer Portada={img}>
      <div>
        <p>{mision}</p>
        <h1>{titulo} </h1>
      </div>
    </PortadaContainer>
  )
}

export default Portada
