import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import logo from '../../../assets/logo-pups-color.webp'
import { login } from '../../../redux/actions/account_actions'
import Button from '../../../utils/Button/Button'

import { FormLogin, LoginContainer } from './Login.Styles'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const estado = useSelector((state) => state.account.status)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const loginSuccess = () => {
    localStorage.setItem('access_token', estado.token)
    localStorage.setItem('user_id', estado.id)
  }

  const handleData = (data) => {
    dispatch(login(data))
    loginSuccess()
    const token = localStorage.getItem('access_token')
    const user = localStorage.getItem('user_id')
    token && user ? navigate('/dashboard') : ''
  }

  return (
    <LoginContainer>
      <FormLogin onSubmit={handleSubmit(handleData)}>
        <img src={logo} alt="Logo AES" />
        <div>
          <span>
            POR UN PERU SANO - <em>Login</em>
          </span>
        </div>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          placeholder="Ingresa tu correo"
          {...register('email', {
            required: true,
            pattern:
              /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
          })}
        />

        {errors.email && (
          <span>El campo 'E-mail' es obligatorio de completar.</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span>Necesitas ingresar un email valido.</span>
        )}

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          {...register('password', {
            required: true,
          })}
        />

        {errors.password && (
          <span>El campo 'Contraseña' es obligatorio de completar</span>
        )}
        <span>{estado.error}</span>
        <input type="submit" />
      </FormLogin>
    </LoginContainer>
  )
}
