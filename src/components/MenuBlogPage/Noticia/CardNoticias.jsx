import React from 'react'
import { CardNoticiaFlex } from './CardNoticias.Styled'
const img = "https://res.cloudinary.com/dhjfxxpja/image/upload/v1680459074/10%20señales%20de%20que%20tu%20grupo%20de%20apoyo%20no%20te%20está%20funcionando.jpg"
const CardNoticias = () => {
  return (
    <CardNoticiaFlex>
    <img src={img} alt="prueba" />
    <span>
      <h5>Lorem ipsum dolor sit cing elit,sed do.</h5>
      <p>🗓️ 24th March 2019</p>
    </span>
   </CardNoticiaFlex>
  )
}

export default CardNoticias
