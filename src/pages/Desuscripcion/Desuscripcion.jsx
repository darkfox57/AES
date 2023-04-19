import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import sadEmoji from '../../assets/sadEmoji.png'

import { deleteFormSuscription } from '../../redux/actions/form_actions'
import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import {
  ImgContainer,
  MainContainer,
  TextContainer,
} from './Desuscripcion.Styles'

export default function Desuscripcion() {
  const [searchparams] = useSearchParams()
  const email = searchparams.get('email')

  const dispatch = useDispatch()

  const handleDesuscription = () => {
    dispatch(deleteFormSuscription(email))
  }

  return (
    <MainContainer>
      <ImgContainer>
        <img src={sadEmoji} alt="" />
      </ImgContainer>

      <TextContainer>
        <h3>Wow... ¿En serio quieres dejarnos?</h3>

        <span>
          El siguiente email: <strong>{email}</strong> esta por dejar de recibir
          notificaciones con respecto a nuestro newsletter.
        </span>
        <span>
          Si estas seguro de que quieres desuscribirte, simplemente haz un click
          en el boton de <em>"Cancelar Suscripcion"</em> que se encuentra justo
          debajo.
        </span>
        <SubmitButton onClick={handleDesuscription}>
          Cancelar suscripcion
        </SubmitButton>
      </TextContainer>
    </MainContainer>
  )
}
