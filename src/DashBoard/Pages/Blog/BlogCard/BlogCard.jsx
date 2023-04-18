import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editBlog, getAllBlogs } from '../../../../redux/actions/blog_actions'
import Button from '../../../../utils/Button/Button'
import { CardContainer, ToggleButton } from './blogcard.styles'

export default function BlogCard({
  image,
  title,
  date,
  status,
  id,
  slug,
  categories,
  description,
  tags,
  files,
  short_description,
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(status)

  const edited = useSelector((state) => state.blog.confirmation)

  const handleClick = async () => {
    const post = {
      _id: id,
      title,
      description,
      image,
      status: !active,
      categories: categories.map((c) => c._id),
      tags: tags.map((t) => t._id),
      files,
      short_description,
    }
    await dispatch(editBlog(post)).finally(() => dispatch(getAllBlogs()))
    setActive(active ? false : true)
  }

  // useEffect(() => {
  //   setActive(active ? false : true)
  // }, [edited.message])

  return (
    <>
      <tr>
        <td>
          <img src={image} alt={title} />
        </td>
        <td>
          <p>{title}</p>
        </td>
        <td>
          {new Date(date).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </td>
        <td>
          <Link to={`/dashboard/blog/edit/${slug}`}>
            <button className="dashBtn">Editar</button>
          </Link>
        </td>
        <td>
          <div>
            <ToggleButton
              className={`${active ? ' active' : ''}`}
              type="button"
              onClick={handleClick}
              aria-pressed={status}
              autoComplete="off"
            >
              <div className="handle"></div>
            </ToggleButton>
          </div>
        </td>
      </tr>
    </>
  )
}
