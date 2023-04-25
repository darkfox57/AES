import React from 'react'
import {
  ArrowIcon,
  BottomContainer,
  Button_Styled,
  Interaction_Styled,
  TopContainer,
} from './Interacciones_Contacto.Styles'

export default function Interacciones_Contacto({
  icon,
  subTitle,
  cta,
  details1,
  details2,
}) {
  return (
    <Interaction_Styled>
      <TopContainer>
        <div>{icon}</div>
        <div>
          <h4>{subTitle}</h4>
          <span>{cta}</span>
        </div>
      </TopContainer>

      <BottomContainer>
        <div>
          <label>{details1}</label>

          {details2 && <label>{details2} </label>}
        </div>
      </BottomContainer>
    </Interaction_Styled>
  )
}
