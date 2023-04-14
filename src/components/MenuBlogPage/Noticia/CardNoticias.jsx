import React from 'react'
import { CardNoticiaFlex } from './CardNoticias.Styled'
import { useNavigate } from 'react-router'
import useScroll from '../../../Hooks/useScrollTop'

const CardNoticias = ({ title, fecha, img, slug, EventPage }) => {
  const Newdate = new Date(fecha)
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (EventPage) {
      navigate(`/evento/${slug}`)
      useScroll(0)
    } else {
      navigate(`/blog/${slug}`)
      useScroll(0)
    }
  }
  return (
    <CardNoticiaFlex onClick={handleNavigate}>
      <img src={img} alt={title} />
      <span>
        <h5>{title}</h5>
        <p>{Newdate.toLocaleDateString()} </p>
      </span>
    </CardNoticiaFlex>
  )
}

export default CardNoticias
