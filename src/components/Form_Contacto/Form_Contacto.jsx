import React from 'react'
import {
  FormContainer,
  MainContainer,
  Requirement,
} from './Form_Contacto.Styles'

import { useForm } from 'react-hook-form'

import Button from '../../utils/Button'

export default function Form_Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const enviarFormulario = (data) => {
    console.log(data)
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
              <span>Este campo requiere completarse</span>
            )}
            {errors.name?.type === 'pattern' && (
              <span>Este campo acepta solo letras</span>
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
              <span>Este campo requiere completarse</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span>El formato del correo es incorrecto</span>
            )}
          </div>
        </Requirement>

        <Requirement>
          <div>
            <label>Telefono</label>
            <input
              type="text"
              placeholder="Introduce tu número de teléfono"
              {...register('telefono', {
                required: true,
                pattern: /^[a-zA-Z\s]+$/,
              })}
            />

            {errors.telefono?.type === 'required' && (
              <span>Este campo require completarse</span>
            )}
            {errors.telefono?.type === 'pattern' && (
              <span>Este campo acepta solo numeros</span>
            )}
          </div>
          <div>
            <label>Asunto</label>
            <input
              type="text"
              placeholder="Escriba el asunto"
              {...register('asunto')}
            />
          </div>
        </Requirement>

        <Requirement>
          <div className="contact-text-area">
            <label>Mensaje</label>
            <textarea
              type="text"
              rows={10}
              placeholder="Escribe tu mensaje aqui"
              {...register('mensaje', {
                required: true,
              })}
            />

            {errors.mensaje?.type === 'required' && (
              <span>Este campo requiere completarse</span>
            )}
          </div>
        </Requirement>

        <Button type="primary" text="Enviar" size="lg" link=""></Button>
      </FormContainer>
    </MainContainer>
  )
}
