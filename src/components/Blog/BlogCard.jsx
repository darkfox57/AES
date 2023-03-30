import React from 'react'
import { BsShare } from 'react-icons/bs'
import Button from '../../utils/Button'
import { CardContainer, ContainerImg, ContainerInfo } from './BlogCard.Styled'
const Img =
  'https://revistarecursoshumanos.com/wp-content/uploads/2016/08/atención-cliente_2015.jpg'
const BlogCard = ({ fecha, text }) => {
  return (
    <CardContainer>
      <ContainerImg>
        <img src={Img} alt="empresa" />
        <div className="fecha">
          <span>{fecha} </span>
        </div>
      </ContainerImg>
      <ContainerInfo>
        <p>{text}</p>
        <div>
          <Button type="secundary" text="Leer más" size="lg" />
          <Button type="link" text={<BsShare />} size="lg" link="/" />
        </div>
      </ContainerInfo>
    </CardContainer>
  )
}

export default BlogCard
