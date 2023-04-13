import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBlog,
  getCategories,
  getTags,
} from '../../../../redux/actions/blog_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { FormBody } from './addBlog.styles'

export default function AddBlog() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)
  const estado = useSelector((state) => state.blog.status)
  const postImg = useSelector((state) => state.file.fileUrl)
  const [slugText, setSlugText] = useState('')

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getTags())
  }, [dispatch])

  const [postContent, setPostContent] = useState('')
  const [reqMessage, setReqMessage] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleData = (data) => {
    const post = {
      slug: data.title
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-'),
      title: data.title,
      description: data.description,
      image: postImg,
      categories: data.categories,
      status: true,
      tags: data.tags,
      files: null,
    }
    dispatch(addBlog(post))
    estado === 'succeeded'
      ? setReqMessage('Creado Correctamente')
      : setReqMessage(estado)
  }

  return (
    <>
      <h2>Crear Articulo de Blog</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { required: true })} />
          </label>
          <span>Cargar nueva imagen de portada:</span>
          <FileUploader folder="blog" />
          <label>
            Descripción
            <textarea
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
          <input type="submit" />
        </form>
      </FormBody>
    </>
  )
}
