import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getUser, updateUser } from '../../../../redux/actions/account_actions'
import { ProfileBody } from './profile.styles'

export default function Profile() {
  const user = useSelector((state) => state.account.user)
  const { id } = useParams()
  const confirmation = useSelector((state) => state.account.confirmation)
  const roles = useSelector((state) => state.account.roles)
  const dispatch = useDispatch()

  useEffect(() => {
    getUser(id)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleData = (data) => {
    const userData = {
      id: user._id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      status: 'active',
      avatar: data.avatar,
      rol: data.roles,
    }

    dispatch(updateUser(userData))
    console.log(confirmation)
  }
  return (
    <>
      <h2>Editar Pefil</h2>
      <ProfileBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Nombre:
            <input
              defaultValue={user.firstname}
              {...register('firstname', { required: true })}
            />
          </label>
          <label>
            Apellido:
            <input
              defaultValue={user.lastname}
              {...register('lastname', { required: true })}
            />
          </label>
          <label>
            Email:
            <input
              defaultValue={user.email}
              {...register('email', { required: true })}
            />
          </label>
          <label>
            Rol
            <select {...register('roles', { required: true })}>
              <option value="Selecciona" defaultValue={user.roles}>
                --
              </option>
              {roles.map(
                (rol) =>
                  rol.name !== 'superadmin' && (
                    <option key={rol._id} value={rol._id}>
                      {rol.name}
                    </option>
                  )
              )}
            </select>
          </label>
          <span>Avatar:</span>
          <img src={user.avatar} alt={user.firstname} />
          <label>
            Cargar nueva imagen:
            <input
              placeholder="Imagen Url"
              defaultValue={user.avatar}
              {...register('image')}
            />
          </label>
          <label>
            Cambiar Contraseña:
            <input
              type="password"
              defaultValue={user.password}
              {...register('password', { required: true })}
            />
          </label>
          <input type="submit" />
        </form>
      </ProfileBody>
    </>
  )
}
