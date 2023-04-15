import React from 'react'
import { Link } from 'react-router-dom'

import { BsShare } from 'react-icons/bs'
import Button from '../../utils/Button/Button'
import { CardContainer, ContainerImg, ContainerInfo } from './BlogCard.Styled'

const BlogCard = ({ image, title, date, slug }) => {
  const fecha =  new Date(date);
  return (
    <>
      <CardContainer>
        <ContainerImg>
          <img src={image} alt={title} />
          <div className="fecha">
            <span>
              {fecha.toLocaleDateString()}
            </span>
          </div>
        </ContainerImg>
        <ContainerInfo>
          <p>{title}</p>
          <div>
            <Button
              type="primary"
              text="Leer más"
              size="lg"
              link={`/blog/${slug}`}
            />
          </div>
        </ContainerInfo>
      </CardContainer>
    </>
  )
}

export default BlogCard
