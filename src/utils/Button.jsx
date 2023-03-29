<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 9159c3c383d0022f52d892791e1b4b539e17f007
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from './button.styles'

// se necesitan 4 argumentos que son los que se estan pasando por props
<<<<<<< HEAD
// para ajustar colores estan las opciones primary, secondary y link la cual es para poner enlaces de leer más
=======
// para ajustar colores estan las opciones primary y secondary
>>>>>>> 9159c3c383d0022f52d892791e1b4b539e17f007
// para seleccionar tamaños estan las opciones sm - md - lg   siendo sm la mas pequeña, lg la más grande y md la que se usa en la mayoria de los casos

export default function Button({ type, link, text, size }) {
  return (
    <ButtonStyle type={type} size={size}>
      <Link to={link}>{text}</Link>
    </ButtonStyle>
  )
}
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 9159c3c383d0022f52d892791e1b4b539e17f007
