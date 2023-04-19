import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteCategory,
  getCategories,
} from '../../../redux/actions/blog_actions'
import { TCWrapper } from '../styles/categories_tags.styles'
import CreateCategory from './AddCategory'
import EditCategory from './EditCategory'

export default function Categories() {
  const categories = useSelector((state) => state.blog.categories)
  const dispatch = useDispatch()

  const handleDelete = async (categoryId) => {
    dispatch(deleteCategory(categoryId)).finally(() =>
      dispatch(getCategories())
    )
  }

  return (
    <>
      <h2>Categorías</h2>
      <TCWrapper>
        <div className="creation">
          <h4>Crear nueva categoría</h4>

          <CreateCategory />

          <h4>Editar categoría</h4>

          <EditCategory />
        </div>
        <div className="list">
          <h4>Categorías</h4>
          {categories.map((cat) => (
            <div key={cat._id}>
              <p>{cat.name}</p>
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
