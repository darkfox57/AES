import React from 'react'
import { BottomLugar, CardContainer, TopFecha } from './CardEventos.Styled'

const CardEventos = ({fecha,lugar,topFecha,}) => {
  return (
    <CardContainer>
      <TopFecha>
        <p>{fecha}</p>
        <h2>{topFecha}</h2>
      </TopFecha>
      <BottomLugar>
        <span>{lugar}</span>
        <button>participar</button>
      </BottomLugar>
    </CardContainer>
  )
}

export default CardEventos
