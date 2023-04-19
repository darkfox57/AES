import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTag, getTags } from '../../../redux/actions/blog_actions'
import { TCWrapper } from '../styles/categories_tags.styles'
import AddTag from './AddTag'
import EditTag from './EditTag'

export default function Tags() {
  const tags = useSelector((state) => state.blog.tags)
  const dispatch = useDispatch()

  const handleDelete = async (categoryId) => {
    dispatch(deleteTag(categoryId)).finally(() => dispatch(getTags()))
  }

  return (
    <>
      <h2>Etiquetas</h2>
      <TCWrapper>
        <div className="creation">
          <h4>Crear nueva etiqueta</h4>
          <AddTag />
          <h4>Editar Etiqueta</h4>
          <EditTag />
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
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </TCWrapper>
    </>
  )
}
