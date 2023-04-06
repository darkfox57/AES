import React from 'react'
import { CardContainer, CardImg, CardInfo } from './CardProximo.Styled'
import Button from '../../utils/Button/Button'
import { BsCheckSquareFill} from 'react-icons/bs';

const CardProximos = ({description,img,date,lugar,title}) => {
 // const imgprueba ='https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
  return (
    <CardContainer>
      <CardImg img={img} >
        <span>{date}</span>
        <span>{lugar}</span>
      </CardImg>
      {/**detalles de la informacion 2da columna*/}
      <CardInfo>
        <h3>{title}</h3>
        <p>
         {description}
        </p>
        <div>
            <span>< BsCheckSquareFill className='check'/> Aplace in history</span>
            <span>< BsCheckSquareFill className='check'/> Its’s about impact, goodness</span>
            <span>< BsCheckSquareFill className='check'/> More goodness</span>
            <span>< BsCheckSquareFill className='check'/> The world we live</span>
        </div>
      </CardInfo>

       {/**3ra columna */}
      <div>
        <Button size={'lg'} text={'home Book A Seat'} type={'secundary'} />
      </div>
    </CardContainer>
  )
}

export default CardProximos
