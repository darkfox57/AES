import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import TextInput from '../../utils/TextInput/TextInput'

import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { FormContainer } from './Suscription.Styles'

import { addFormSuscription } from '../../redux/actions/form_actions'

export default function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

  const handleSuscription = async (data) => {
    dispatch(addFormSuscription(data))
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
