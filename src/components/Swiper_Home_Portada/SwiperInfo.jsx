import React from 'react'

import Button from '../../utils/Button/Button'
import { FlexButtom, TextMainContainer } from './SwiperInfo.Styled'
//recibe data como props
export default function SwiperInfo({ title, subtitle }) {
  return (
    <>
      <TextMainContainer>
        <h2>{title}</h2>
        <p>{subtitle} </p>
        <FlexButtom>
          <Button
            type="primary"
            link="/faqs/donaciones"
            text="Donar ahora"
            size="md"
          />
          <Button
            type="secondary"
            link="/contacto"
            text="Contactenos"
            size="md"
          />
        </FlexButtom>
      </TextMainContainer>
    </>
  )
}
