import React from 'react'

import Button from '../../utils/Button/Button'
import { FlexButtom, TextMainContainer } from './SwiperInfo.Styled'
//recibe data como props
export default function SwiperInfo({ text }) {
  return (
    <>
      <TextMainContainer>
        <h2>ASOCIACION DE EDUCACION SANITARIA</h2>
        <p>{text} </p>
        <FlexButtom>
          <Button type="primary" link="/" text="Donar ahora" size="md" />
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
