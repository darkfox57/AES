import React from 'react'
import { Link } from 'react-router-dom'

import { BsShare } from 'react-icons/bs'
import Button from '../../utils/Button/Button'
import { CardContainer, ContainerImg, ContainerInfo } from './BlogCard.Styled'

const Img =
  'https://revistarecursoshumanos.com/wp-content/uploads/2016/08/atención-cliente_2015.jpg'
const BlogCard = ({ image, title, date, status, id, slug }) => {
  return (
    <>
      <CardContainer>
        <ContainerImg>
          <img src={image} alt={title} />
          <div className="fecha">
            <span>
              {new Date(date).toLocaleString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}{' '}
            </span>
          </div>
        </ContainerImg>
        <ContainerInfo>
          <p>{title}</p>
          <div>
            <Button
              type="secundary"
              text="Leer más"
              size="lg"
              link={`/blog/${slug}`}
            />
            <Button type="link" text={<BsShare />} size="lg" />
          </div>
        </ContainerInfo>
      </CardContainer>
    </>
  )
}

export default BlogCard
