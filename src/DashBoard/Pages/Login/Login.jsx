import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import Button from '../../../utils/Button/Button'

import logo from '../../../assets/logo-pups-color.webp'

import { FormLogin, LoginContainer } from './Login.Styles'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const email = 'maxi@gmail.com'
  const password = '1234'

  const Login = (data) => {
    if (email === data.email && password === data.password)
      navigate('/dashboard')
    else setErrorMessage('El usuario y/o contraseña no coinciden')
  }

  return (
    <LoginContainer>
      <FormLogin onSubmit={handleSubmit(Login)}>
        <img src={logo} alt="Logo AES" />
        <div>
          <span>
            POR UN PERU SANO - <em>Login</em>
          </span>
        </div>
        <label>E-mail: </label>
        <input
          type="text"
          placeholder="Ingresa tu correo"
          {...register('email', {
            required: true,
            pattern:
              /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
          })}
        />
        {errors.email?.type === 'required' && (
          <span>El campo 'E-mail' es obligatorio de completar</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span>El formato del campo E-mail es incorrecto</span>
        )}

        <label>Contraseña:</label>
        <input
          type="text"
          placeholder="Ingresa tu contraseña"
          {...register('password', {
            required: true,
          })}
        />

        {errors.password?.type === 'required' && (
          <span>El campo 'Contraseña' es obligatorio de completar</span>
        )}

        <Button type="primary" size="md" text="Login"></Button>

        {errorMessage && <span>{errorMessage}</span>}
      </FormLogin>
    </LoginContainer>
  )
}
