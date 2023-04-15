import React from 'react'
import {
  BottomContainer,
  Interaction_Styled,
  TopContainer,
  Button_Styled,
  ArrowIcon,
} from './Interacciones_Contacto.Styles'

export default function Interacciones_Contacto({
  icon,
  subTitle,
  details1,
  details2,
}) {
  return (
    <Interaction_Styled>
      <TopContainer>
        <div>{icon}</div>
        <div>
          <h4>{subTitle}</h4>
          <span>Sent mail asap anytime</span>
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
