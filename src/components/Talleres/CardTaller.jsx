import React from 'react'
import Button from '../../utils/Button'
import { CardContainer, CenterCard, ContainerIcon, ContainerInfo } from './CardTaller.Styled'
const CardTaller = ({icon,title,parraf}) => {
  return (
    <CardContainer>

      <CenterCard>
        <ContainerIcon>
           {icon}
        </ContainerIcon>
        <ContainerInfo>
            <h2>{title}</h2>
            <p>{parraf}</p>
        </ContainerInfo>
        <div>
        <Button type={"secondary"} size={"sm"} text={"Readme"} link={"/"} />
        </div>
      </CenterCard>

    </CardContainer>
  )
}

export default CardTaller
