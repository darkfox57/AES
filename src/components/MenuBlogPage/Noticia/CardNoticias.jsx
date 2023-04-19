import React from 'react'
import { CardNoticiaFlex } from './CardNoticias.Styled'
import { useNavigate } from 'react-router'
import useScroll from '../../../Hooks/useScrollTop'

const CardNoticias = ({
  title,
  fecha,
  img,
  slug,
  EventPage,
  dateOut,
  dateIn,
}) => {
  const Newdate = new Date(fecha)
  const NewOut = new Date(dateOut)
  const NewIn = new Date(dateIn)

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
        {!dateIn && <p>{Newdate.toLocaleDateString()}</p>}
        {dateOut && dateIn && (
          <div className="flex">
            <p>
              {NewOut.toLocaleDateString()}
            </p>
            -
            <p>
               {NewIn.toLocaleDateString()}
            </p>
          </div>
        )}
      </span>
    </CardNoticiaFlex>
  )
}

export default CardNoticias
