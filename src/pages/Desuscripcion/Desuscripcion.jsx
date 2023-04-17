import React from 'react'
import { useDispatch } from 'react-redux'

import { MainContainer } from './Desuscripcion.Styles'
import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { deleteFormSuscriptioin } from '../../redux/actions/form_actions'


export default function Desuscripcion() {

  /*const DesuscripcionBtn = ()=> {
  const dispatch = useDispatch()

    const handleSuscription = (email) => {
    dispatch(deleteFormSuscriptioin(email))
  }*/
  
  return (
    <MainContainer>
      <h3>Cancelacion</h3>

      <span>
        Haga clic en "Cancelar suscripción" para dejar de recibir mensajes de
        este remitente a esta dirección de correo electrónico:
        Haga clic en "Cancelación" para dejar de recibir mensajes de este
        remitente a esta dirección de correo electrónico:
        <strong></strong>
      </span>

      <SubmitButton>Cancelar suscripcion</SubmitButton>
    </MainContainer>
  )
}
