import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getCategories, getTags } from '../../../../redux/actions/blog_actions'
import { getEvent } from '../../../../redux/actions/event_actions'
import { FormBody, ToggleButton } from './editEvent.styles'

export default function EditEvent() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const eventPost = useSelector((state) => state.event.event)
  const categories = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [active, setActive] = useState('aqui va event status')

  // useEffect(() => {
  //   setActive(blogPost.status)
  // }, [blogPost])

  const handleClick = () => {
    const post = {
      id: blogPost._id,
      title: blogPost.title,
      description: blogPost.description,
      image: blogPost.image,
      status: !active,
      categories: blogPost.categories.map((c) => c._id),
      tags: blogPost.tags.map((t) => t._id),
      files: null,
    }
    dispatch(editBlog(post))
    setActive(active ? false : true)
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getTags())
  }, [dispatch])

  useEffect(() => {
    dispatch(getEvent(slug))
  }, [slug, dispatch])

  const handleData = (data) => {
    const post = {
      id: blogPost._id,
      title: data.title,
      description: data.description,
      image: data.image,
      status: true,
      categories: data.categories,
      tags: data.tags,
      files: null,
    }
    dispatch(editBlog(post))
  }

  return (
    <>
      <h2>Editar</h2>
      <div className="toggle">
        <ToggleButton
          className={`${active ? ' active' : ''}`}
          type="button"
          onClick={handleClick}
          // aria-pressed={blogPost.status}
          autoComplete="off"
        >
          <div className="handle"></div>
        </ToggleButton>
      </div>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input
              defaultValue={eventPost.title}
              {...register('title', { required: true })}
            />
          </label>
          <span>slug: {eventPost.slug}</span>
          <label>
            Descripción
            <textarea
              defaultValue={eventPost.description}
              rows="10"
              {...register('description', { required: true, maxLength: 800 })}
            />
          </label>
          <div className="checkboxBlock">
            <span>Categorias:</span>
            {categories.map((category) => (
              <label key={category.name}>
                <input
                  type="checkbox"
                  value={category._id}
                  // checked={blogPost.categories?.some(
                  //   (c) => c._id === category._id
                  // )}
                  {...register('categories')}
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
          <div className="checkboxBlock">
            <span>Etiquetas:</span>
            {tags.map((tag) => (
              <label key={tag._id}>
                <input
                  type="checkbox"
                  // checked={blogPost.tags?.some((t) => t === tag._id)}
                  value={tag._id}
                  placeholder={tag.name}
                  {...register('tags', {})}
                />
                <span>{tag.name}</span>
              </label>
            ))}
          </div>
          <span>Imagen:</span>
          <img src={eventPost.frontpage} alt={eventPost.title} />
          <label>
            Cargar nueva imagen:
            <input
              placeholder="Imagen Url"
              defaultValue={eventPost.frontpage}
              {...register('image')}
            />
            <input type="submit" />
          </label>
        </form>
      </FormBody>
    </>
  )
}
