import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  AddCategory,
  DeleteCategory,
  getCategories,
} from '../../../redux/actions/blog_actions'
import { TCWrapper } from '../styles/categories_tags.styles'

export default function Categories() {
  const categories = useSelector((state) => state.blog.categories)
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
      await dispatch(AddCategory(data)).finally(() => dispatch(getCategories()))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }

  const handleDelete = (categoryId) => {
    dispatch(DeleteCategory(categoryId))
  }

  return (
    <>
      <h2>Categorías</h2>
      <TCWrapper>
        <div className="creation">
          <h4>Crear nueva categoría</h4>
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
        </div>
        <div className="list">
          <h4>Categorías</h4>
          {categories.map((cat) => (
            <div key={cat._id}>
              <p>{cat.name}</p>
              <button
                className="dashLink"
                onClick={() => handleDelete(tag._id)}
              >
                Editar
              </button>
              <button
                className="dashLink"
                onClick={() => handleDelete(cat._id)}
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
