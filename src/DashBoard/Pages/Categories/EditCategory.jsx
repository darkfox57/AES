import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  editCategory,
  getCategories,
} from '../../../redux/actions/blog_actions'

export default function EditCategory() {
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

  const handleEdit = async (data) => {
    try {
      const id = data.id
      delete data.id
      const newData = {
        ...data,
        id: id,
      }

      await dispatch(editCategory(newData)).finally(() =>
        dispatch(getCategories())
      )
      return notification()
    } catch (error) {
      errorNotify()
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleEdit)}>
        <div className="selectBlock">
          <span>Selecciona la categoría a editar:</span>
          <select {...register('id', { required: true })}>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <label>
          Nuevo nombre:
          <input
            placeholder="Ingresa el nombre de la categoría"
            {...register('name', { required: true })}
          />
        </label>
        <button className="dashBtn">Editar</button>
      </form>
    </>
  )
}
