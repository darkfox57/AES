import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import TextInput from '../../utils/TextInput/TextInput'

import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { FormContainer } from './Suscription.Styles'

import { addFormSuscription } from '../../redux/actions/form_actions'

export default function () {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const error = useSelector((state) => state.form.error)
  const [showError, setShowError] = useState(null)
  const errorRef = useRef(null)
  const MySwal = withReactContent(Swal)

  const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

  const handleSuscription = async (data) => {
    dispatch(addFormSuscription(data))
    setFormSubmitted(true)
  }

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'Muchas gracias por suscribirte a nuestro newsletter!',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, parece que hubo un problema al querer inscribirte a nuestro newsletter',
    })
  }

  useEffect(() => {
    errorRef.current = error
  }, [error])

  useEffect(() => {
    if (formSubmitted) {
      const hasError = errorRef.current !== null
      if (hasError) {
        errorNotify()
      } else {
        notification()
      }
      setFormSubmitted(false)
    }
  }, [formSubmitted])

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
