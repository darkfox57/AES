import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { editTag, getTags } from '../../../redux/actions/blog_actions'

export default function EditTag() {
  const tags = useSelector((state) => state.blog.tags)
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

  const handleEdit = async (data) => {
    try {
      const id = data.id
      delete data.id
      const newData = {
        ...data,
        id: id,
      }

      await dispatch(editTag(newData)).finally(() => dispatch(getTags()))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleEdit)}>
        <div className="selectBlock">
          <span>Selecciona la etiqueta a editar:</span>
          <select {...register('id', { required: true })}>
            {tags.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
        <label>
          Nuevo nombre:
          <input
            placeholder="Ingresa el nombre de la etiqueta"
            {...register('name', { required: true })}
          />
        </label>
        <button className="dashBtn">Editar</button>
      </form>
    </>
  )
}
