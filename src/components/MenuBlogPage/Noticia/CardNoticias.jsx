import React from 'react'
import { CardNoticiaFlex } from './CardNoticias.Styled'
//const img = "https://res.cloudinary.com/dhjfxxpja/image/upload/v1680459074/10%20señales%20de%20que%20tu%20grupo%20de%20apoyo%20no%20te%20está%20funcionando.jpg"
const CardNoticias = ({title,fecha,img}) => {
  const Newdate = new Date(fecha);
  return (
    <CardNoticiaFlex>
    <img src={img} alt={title} />
    <span>
      <h5>{title}</h5>
      <p>{Newdate.toLocaleDateString()} </p>
    </span>
   </CardNoticiaFlex>
  )
}

export default CardNoticias
