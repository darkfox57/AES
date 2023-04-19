import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AddTag, DeleteTag, getTags } from '../../../redux/actions/blog_actions'
import { TCWrapper } from '../styles/categories_tags.styles'

export default function Tags() {
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

  const handleData = async (data) => {
    try {
      await dispatch(AddTag(data)).finally(() => dispatch(getTags()))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }

  const handleDelete = (categoryId) => {
    dispatch(DeleteTag(categoryId))
  }

  return (
    <>
      <h2>Etiquetas</h2>
      <TCWrapper>
        <div className="creation">
          <h4>Crear nueva etiqueta</h4>
          <form onSubmit={handleSubmit(handleData)}>
            <label>
              Nombre:
              <input
                placeholder="Ingresa el nombre de la etiqueta"
                {...register('name', { required: true })}
              />
            </label>
            <button className="dashBtn">Crear</button>
          </form>
        </div>
        <div className="list">
          <h4>Etiquetas</h4>
          {tags.map((tag) => (
            <div key={tag._id}>
              <p>{tag.name}</p>
              <button
                className="dashLink"
                onClick={() => handleDelete(tag._id)}
              >
                Editar
              </button>
              <button
                className="dashLink"
                onClick={() => handleDelete(tag._id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </TCWrapper>
    </>
  )
}
