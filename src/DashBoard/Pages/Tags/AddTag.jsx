import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addTag, getTags } from '../../../redux/actions/blog_actions'

export default function AddTag() {
  const dispatch = useDispatch()

  const MySwal = withReactContent(Swal)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'La publicación se ha actualizado correctamente!',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se ha podido guardar cambios!',
    })
  }

  const handleData = async (data) => {
    try {
      await dispatch(addTag(data)).finally(() => dispatch(getTags()))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        <label>
          Nombre:
          <input
            placeholder="Ingresa el nombre de la categoría"
            {...register('name', { required: true })}
          />
        </label>
        <button className="dashBtn">Crear</button>
      </form>
    </>
  )
}
