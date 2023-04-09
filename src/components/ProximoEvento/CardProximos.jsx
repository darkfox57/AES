import React from 'react'
import { CardContainer, CardImg, CardInfo } from './CardProximo.Styled'
import Button from '../../utils/Button/Button'
import { BsCheckSquareFill } from 'react-icons/bs'

const CardProximos = ({ slug, description, img, date, lugar, title }) => {
  return (
    <CardContainer>
      <CardImg img={img}>
        <span>
          {new Date(date).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </span>
        <span>{lugar}</span>
      </CardImg>
      {/**detalles de la informacion 2da columna*/}
      <CardInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <span>
            <BsCheckSquareFill className="check" /> Aplace in history
          </span>
          <span>
            <BsCheckSquareFill className="check" /> Its’s about impact, goodness
          </span>
          <span>
            <BsCheckSquareFill className="check" /> More goodness
          </span>
          <span>
            <BsCheckSquareFill className="check" /> The world we live
          </span>
        </div>
      </CardInfo>

      {/**3ra columna */}
      <div>
        <Button
          size={'lg'}
          text={'Anótate y participa!'}
          type={'secundary'}
          link={`/evento/${slug}`}
        />
      </div>
    </CardContainer>
  )
}

export default CardProximos
