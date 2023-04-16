import React from 'react'

import { MainContainer } from './Desuscripcion.Styles'
import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'

export default function Desuscripcion() {
  return (
    <MainContainer>
      <h3>Cancelacion</h3>

      <span>
        Haga clic en "Cancelación" para dejar de recibir mensajes de este
        remitente a esta dirección de correo electrónico:
        <strong></strong>
      </span>

      <SubmitButton>Cancelar suscripcion</SubmitButton>
    </MainContainer>
  )
}
