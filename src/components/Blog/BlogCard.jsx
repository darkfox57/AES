import React from 'react'
import Button from '../../utils/Button'
import { CardContainer, ContainerImg, ContainerInfo } from './BlogCard.Styled'
import {BsShare } from 'react-icons/bs';
const Img = "https://revistarecursoshumanos.com/wp-content/uploads/2016/08/atención-cliente_2015.jpg"
const BlogCard = ({fecha,text}) => {
  return (
    <CardContainer>
      <ContainerImg>
        <img src={Img} alt="empresa" />
        <div className='fecha'>
        <h3>{fecha} </h3>
        </div>
      </ContainerImg>
      <ContainerInfo>
        <h3>{text}</h3>
        <div>
        <Button type="secundary" text="Leer más" size="lg" />
        <Button type="link" text={<BsShare/>} size="lg" link="/"/>
        </div>
      </ContainerInfo>
    </CardContainer>
  )
}

export default BlogCard
