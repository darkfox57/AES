import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog } from '../../../redux/actions/blog_actions'
import Button from '../../../utils/Button/Button'
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
}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(status)

  const edited = useSelector((state) => state.blog.confirmation)

  const handleClick = () => {
    const post = {
      id,
      title,
      description,
      image,
      status: !active,
      categories: categories.map((c) => c._id),
      tags: tags.map((t) => t._id),
      files: null,
    }
    dispatch(editBlog(post))
    setActive(active ? false : true)
  }

  // useEffect(() => {
  //   setActive(active ? false : true)
  // }, [edited.message])

  return (
    <>
      <CardContainer>
        <img src={image} alt={title} />
        <p>{title}</p>
        <span>
          {new Date(date).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </span>
        <Button
          type="primary"
          text="Editar"
          size="lg"
          link={`/dashboard/blog/edit/${slug}`}
        />
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
      </CardContainer>
    </>
  )
}
