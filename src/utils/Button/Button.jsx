import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from './Button.styles'

// se necesitan 4 argumentos que son los que se estan pasando por props

// para ajustar colores estan las opciones primary, secondary y link la cual es para poner enlaces de leer más. Esto se pasa en el prop 'type'

// para seleccionar tamaños estan las opciones sm - md - lg   siendo sm la mas pequeña, lg la más grande y md la que se usa en la mayoria de los casos. Esto se pasa en la prop 'size'

export default function Button({ type, link, a, text, size, flex,funtion }) {
  const handleClick = () => {
    if(funtion) funtion()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <Link to={link}  target={a && "_blank"} rel="noopener noreferrer" onClick={handleClick}>
      <ButtonStyle type={type}  size={size} flex={flex}>
        {text}
      </ButtonStyle>
    </Link>
  )
}
