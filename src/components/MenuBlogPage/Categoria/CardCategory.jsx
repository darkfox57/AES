import React from 'react'
import { CardContainer } from './CardCategory.Styled'

const CardCategory = ({text,cant}) => {
  return (
    <CardContainer>
        <span>{text}</span>
        <span>{cant}</span>
    </CardContainer>
  )
}

export default CardCategory
