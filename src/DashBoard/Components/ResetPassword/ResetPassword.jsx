import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../../redux/actions/account_actions'
import { ResetForm } from './reset.styles'

export default function ResetPassword({ id }) {
  const dispatch = useDispatch()
  const confirmation = useSelector((state) => state.account.passConfirmation)
  const [updated, setUpdated] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm()
  const formRef = useRef(null)

  const watchNewPassword = watch('newPassword', '')
  const watchNewPasswordVerified = watch('newPasswordVerified', '')

  const handlePassword = async (data) => {
    const userData = {
      id: id,
      oldpassword: data.oldPassword,
      newpassword: data.newPasswordVerified,
    }
    dispatch(resetPassword(userData))
  }

  useEffect(() => {
    formRef.current.reset()
    setUpdated(confirmation)
  }, [confirmation])

  return (
    <ResetForm>
      <h4>Cambiar Contraseñá</h4>
      <form ref={formRef} onSubmit={handleSubmit(handlePassword)}>
        <label>
          Contraseñá actual:
          <input
            type="password"
            {...register('oldPassword', { required: true })}
          />
        </label>
        <label>
          Contraseña nueva:
          <input
            type="password"
            {...register('newPassword', { required: true })}
          />
        </label>
        <label>
          Confirmar nueva contraseña:
          <input
            type="password"
            {...register('newPasswordVerified', { required: true })}
          />
        </label>
        {watchNewPassword !== watchNewPasswordVerified && (
          <p>Las contraseñas no coinciden</p>
        )}
        <button className="dashBtn" type="submit">
          Cambiar Contraseña
        </button>
        <span>{updated.error || updated.message}</span>
      </form>
    </ResetForm>
  )
}
