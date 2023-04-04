import React from 'react'
import Button from '../../../utils/Button/Button'
import { CardContainer, ContainerInfo } from './blogcard.styles'

export default function BlogCard({ image, title, date, status, id, slug }) {
  return (
    <>
      <CardContainer>
        <img src={image} alt={title} />
        <ContainerInfo>
          <span>
            {new Date(date).toLocaleString('es-ES', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}{' '}
          </span>
          <p>{title}</p>
          <div>
            <Button
              type="primary"
              text="Editar"
              size="lg"
              link={`/dashboard/blog/${slug}`}
            />
          </div>
        </ContainerInfo>
      </CardContainer>
    </>
  )
}
