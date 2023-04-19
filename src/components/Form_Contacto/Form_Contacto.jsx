import React from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import {
  FormContainer,
  MainContainer,
  Requirement,
} from './Form_Contacto.Styles'
import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'

import { addFormContact } from '../../redux/actions/form_actions'

export default function Form_Contacto() {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const enviarFormulario = (data) => {
    dispatch(addFormContact(data))
    reset()
  }

  return (
    <MainContainer>
      <h2>Contáctenos</h2>

      <FormContainer onSubmit={handleSubmit(enviarFormulario)}>
        <Requirement>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register('name', {
                required: true,
                pattern: /^[a-zA-Z\s]+$/,
              })}
            />

            {errors.name?.type === 'required' && (
              <span>* Este campo requiere completarse</span>
            )}
            {errors.name?.type === 'pattern' && (
              <span>* Este campo acepta solo letras</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Ingresa tu email"
              {...register('email', {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />

            {errors.email?.type === 'required' && (
              <span>* Este campo requiere completarse</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span>* El formato del correo es incorrecto</span>
            )}
          </div>
        </Requirement>

        <Requirement>
          <div>
            <label>Telefono</label>
            <input
              type="text"
              placeholder="Introduce tu número de teléfono"
              {...register('phone', {
                required: true,
                pattern: '^\\+(?:[0-9]-?){6,14}[0-9]$',
              })}
            />

            {errors.phone?.type === 'required' && (
              <span>* Este campo require completarse</span>
            )}
            {errors.phone?.type === 'pattern' && (
              <span>* El formato es incorrecto</span>
            )}
          </div>
          <div>
            <label>Asunto</label>
            <input
              type="text"
              placeholder="Escriba el asunto"
              {...register('title', {
                required: true,
              })}
            />

            {errors.title?.type === 'required' && (
              <span>* Este campo require completarse</span>
            )}
          </div>
        </Requirement>

        <Requirement>
          <div className="contact-text-area">
            <label>Mensaje</label>
            <textarea
              type="text"
              rows={10}
              placeholder="Escribe tu mensaje aqui"
              {...register('content', {
                required: true,
              })}
            />

            {errors.content?.type === 'required' && (
              <span>* Este campo requiere completarse</span>
            )}
          </div>
        </Requirement>

        <div>
          <SubmitButton>Enviar consulta</SubmitButton>
        </div>
      </FormContainer>
    </MainContainer>
  )
}
