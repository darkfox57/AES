import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import TextInput from '../../utils/TextInput/TextInput'

import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { FormContainer } from './Suscription.Styles'

import { addFormSuscription } from '../../redux/actions/form_actions'

export default function () {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const MySwal = withReactContent(Swal)

  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

  const handleSuscription = (data) => {
    try {
      dispatch(addFormSuscription(data))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'Muchas gracias por suscribirte a nuestro newsletter!',
    })
  }

  const errorNotify = async ({ errorMsg }) => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMsg,
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSuscription)}>
      <h4>Suscríbete a nuestro NEWSLETTER!!</h4>

      <TextInput
        register={register}
        label={'Correo electronico'}
        name={'email'}
        type={'text'}
        required={true}
        errors={errors}
        pattern={regexMail}
      />

      <SubmitButton type="submit">Suscribirse</SubmitButton>
    </FormContainer>
  )
}
