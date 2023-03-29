import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from './button.styles'

// se necesitan 4 argumentos que son los que se estan pasando por props
// para ajustar colores estan las opciones primary y secondary
// para seleccionar tamaños estan las opciones sm - md - lg   siendo sm la mas pequeña, lg la más grande y md la que se usa en la mayoria de los casos

export default function Button({ type, link, text, size }) {
  return (
    <ButtonStyle type={type} size={size}>
      <Link to={link}>{text}</Link>
    </ButtonStyle>
  )
}
