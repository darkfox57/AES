import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import sadEmoji from '../../assets/sadEmoji.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

  const error = useSelector((state) => state.form.error)
  const MySwal = withReactContent(Swal)

  const handleDesuscription = () => {
    dispatch(deleteFormSuscription(email))

    if (error) {
      return errorNotify()
    } else {
      return notification()
    }
  }

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Proceso exitoso',
      text: 'Te has desuscrito exitosamente!',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, el proceso de desuscripcion ha fallado!',
    })
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
