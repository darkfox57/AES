import React from 'react'

import {
  CardContainer,
  CenterCard,
  ContainerIcon,
  ContainerInfo,
} from './CardTaller.Styled'
import Button from '../../utils/Button/Button'
const CardTaller = ({ icon, title, parraf }) => {
  return (
    <CardContainer>
      <CenterCard>
        <ContainerIcon>{icon}</ContainerIcon>
        <ContainerInfo>
          <h5>{title}</h5>
          <p>{parraf}</p>
          <Button type={"primary"} size={"lg"} text={"Read More"} />
        </ContainerInfo>
      </CenterCard>
      
    </CardContainer>
  )
}

export default CardTaller
