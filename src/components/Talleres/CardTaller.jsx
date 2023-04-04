import React from 'react'

import {
  CardContainer,
  CenterCard,
  ContainerIcon,
  ContainerInfo,
} from './CardTaller.Styled'
const CardTaller = ({ icon, title, parraf }) => {
  return (
    <CardContainer>
      <CenterCard>
        <ContainerIcon>{icon}</ContainerIcon>
        <ContainerInfo>
          <p>{title}</p>
          <p>{parraf}</p>
        </ContainerInfo>
      </CenterCard>
    </CardContainer>
  )
}

export default CardTaller
