import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import { createUser } from '../../../../redux/actions/account_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { ProfileBody } from '../Profile/profile.styles'

export default function NewAccount() {
  const confirmation = useSelector((state) => state.account.confirmation)
  const allRoles = useSelector((state) => state.account.roles)
  const option_roles = allRoles.filter((rol) => rol.name !== 'superadmin')
  const postImg = useSelector((state) => state.file.fileUrl)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const alert = async (confirmation) => {
    let hasConfirmationMessage = false
    while (!hasConfirmationMessage) {
      if (confirmation) {
        hasConfirmationMessage = true
        Swal.fire('Creado correctamente')
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
    setTimeout(() => {
      if (!hasConfirmationMessage) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha podido guardar cambios!',
        })
      }
    }, 3000)
  }

  const handleData = (data) => {
    const userData = {
      ...data,
      avatar: postImg,
    }
    dispatch(createUser(userData))
    alert(confirmation.message)
  }
  return (
    <>
      <h2>Crear Usuario</h2>
      <ProfileBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Nombre:
            <input {...register('firstname', { required: true })} />
          </label>
          <label>
            Apellido:
            <input {...register('lastname', { required: true })} />
          </label>
          <label>
            Email:
            <input {...register('email', { required: true })} />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              {...register('password', { required: true })}
            />
          </label>
          <label>
            Rol
            <select {...register('roles', { required: true })}>
              <option value="Selecciona">--</option>
              {option_roles.map((rol) => (
                <option key={rol._id} value={rol._id}>
                  {rol.name}
                </option>
              ))}
            </select>
          </label>
          <span>Avatar:</span>

          <FileUploader folder="uploads" />

          <span>{confirmation.error}</span>
          <span>{confirmation.message}</span>
          <input type="submit" />
        </form>
      </ProfileBody>
    </>
  )
}
