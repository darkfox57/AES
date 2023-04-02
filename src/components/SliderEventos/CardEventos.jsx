import React from 'react'
import Button from '../../utils/Button/Button'
import { BottomLugar, CardContainer, TopFecha } from './CardEventos.Styled'

const CardEventos = ({ fecha, lugar, topFecha }) => {
  return (
    <CardContainer>
      <TopFecha>
        <span>{fecha}</span>
        <h4>{topFecha}</h4>
      </TopFecha>
      <BottomLugar>
        <span>{lugar}</span>
        <Button type="primary" size="sm" text="Participar" link="/" />
      </BottomLugar>
    </CardContainer>
  )
}

export default CardEventos
