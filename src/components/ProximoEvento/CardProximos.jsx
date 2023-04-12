import React from 'react'
import { CardContainer, CardImg, CardInfo } from './CardProximo.Styled'
import Button from '../../utils/Button/Button'
import { BsCheckSquareFill } from 'react-icons/bs'

const CardProximos = ({
  slug,
  description,
  img,
  dateIn,
  dateOut,
  lugar,
  title,
}) => {
  return (
    <CardContainer>
      <CardImg img={img}>
        <span>
          <strong>Lugar:&nbsp;</strong> <small>{lugar}</small>
        </span>
      </CardImg>

      <CardInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="infoContainer">
          <span>
            <strong>Inicio:&nbsp;</strong>
            <small>
              {new Date(dateIn).toLocaleString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </small>
          </span>
          <span>
            <strong>Fin:&nbsp;</strong>
            <small>
              {new Date(dateOut).toLocaleString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </small>
          </span>
          <span></span>
        </div>

        <div>
          <Button
            size={'lg'}
            text={'Participa!'}
            type={'link'}
            link={`/evento/${slug}`}
          />
        </div>
      </CardInfo>
    </CardContainer>
  )
}

export default CardProximos
