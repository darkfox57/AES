import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import TextInput from '../../utils/TextInput/TextInput'

import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { FormSuscription, FormContainer } from './EventSuscription.Styles'

import { createEventSuscription } from '../../redux/actions/event_actions'

export default function EventSuscription({ id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const dispatch = useDispatch()

  const regexLetras = new RegExp('^[A-Za-zÁ-ÿ\\s]+$')
  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

  const Submit = (data) => {
    const formSuscription = {
      ...data,
      events: id,
    }
    dispatch(createEventSuscription(formSuscription))

    reset()
  }

  return (
    <FormContainer>
      <h3>Anotate y participá!!</h3>

      <FormSuscription onSubmit={handleSubmit(Submit)}>
        <div>
          <TextInput
            register={register}
            name={'fullname'}
            label={'Nombre completo'}
            type={'text'}
            required={true}
            pattern={regexLetras}
            errors={errors}
          />
        </div>

        <div>
          <TextInput
            register={register}
            name={'email'}
            label={'Correo electronico'}
            type={'text'}
            required={true}
            pattern={regexMail}
            errors={errors}
          />
        </div>

        <div>
          <SubmitButton type="submit">Enviar solicitud</SubmitButton>
        </div>
      </FormSuscription>
    </FormContainer>
  )
}
