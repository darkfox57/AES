import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  deleteUser,
  getAllUsers,
  getOtherUser,
  updateUser,
} from '../../../../redux/actions/account_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import ResetPassword from '../../../Components/ResetPassword/ResetPassword'
import ResetPasswordSuper from '../../../Components/ResetPassword/ResetPasswordSuper'
import { ProfileBody } from './profile.styles'

export default function Profile() {
  const user = useSelector((state) => state.account.anotherUser)
  const { id } = useParams()
  const confirmation = useSelector((state) => state.account.confirmation)
  const roles = useSelector((state) => state.account.roles)
  const [newAvatar, setNewAvatar] = useState(false)
  const postImg = useSelector((state) => state.file.fileUrl)
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user_id = localStorage.getItem('user_id')
  const user_role = localStorage.getItem('user_role')

  useEffect(() => {
    dispatch(getOtherUser(id))
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (user) {
      const { _id, firstname, lastname, avatar, email } = user
      reset({
        ...user,
      })
    }
  }, [user, reset])

  const notification = async (text) => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'usuario editado',
    })
  }

  const errorNotify = async (text) => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'no se pudo editar el usuario',
    })
  }

  const handleData = async (data) => {
    const userData = {
      id: user._id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      status: true,
      avatar: postImg || user.avatar,
    }
    try {
      await dispatch(updateUser(userData)).finally(() =>
        dispatch(getOtherUser(id))
      )
      return notification()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteUser(user._id)).finally(() =>
        dispatch(getAllUsers())
      )
      return navigate('/dashboard/cuentas')
    } catch (error) {
      return console.log(error)
    }
  }

  return (
    <>
      <h2>Editar Pefil</h2>
      <button className="dashBtn" onClick={handleDelete}>
        Eliminar usuario
      </button>
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

          {/* <label>
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
          </label> */}
          <span>Avatar:</span>
          {!newAvatar ? (
            <>
              <img src={user.avatar} alt={user.firstname} />
              <button className="dashBtn" onClick={() => setNewAvatar(true)}>
                Subir nuevo avatar
              </button>
            </>
          ) : (
            <FileUploader folder="uploads" />
          )}

          <span>{confirmation.error}</span>
          <span>{confirmation.message}</span>
          <input type="submit" />
        </form>

        {user._id === user_id && <ResetPassword id={user._id} />}
        {user_role === 'superadmin' && user._id !== user_id && (
          <ResetPasswordSuper id={user._id} />
        )}
      </ProfileBody>
    </>
  )
}
