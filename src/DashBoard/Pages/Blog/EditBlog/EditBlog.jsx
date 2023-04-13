import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import {
  editBlog,
  getBlog,
  getCategories,
  getTags,
} from '../../../../redux/actions/blog_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { FormBody, ToggleButton } from './editBlog.styles'

export default function EditBlog() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const blogPost = useSelector((state) => state.blog.blog)
  const categories = useSelector((state) => state.blog.categories)
  const confirmation = useSelector((state) => state.blog.confirmation)
  const postImg = useSelector((state) => state.file.fileUrl)
  const tags = useSelector((state) => state.blog.tags)

  const [newImg, setNewImg] = useState(false)
  const [dataImg, setDataImg] = useState(blogPost.image)

  useEffect(() => {
    setActive(blogPost.status)
  }, [blogPost])

  const { register, handleSubmit, defaultValues } = useForm({
    defaultValues: {
      id: blogPost._id,
      title: blogPost.title,
      description: blogPost.description,
      image: blogPost.image,
      files: null,
    },
  })

  const [active, setActive] = useState(blogPost.status)

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
    dispatch(getBlog(slug))
  }, [slug, dispatch])

  const alert = async () => {
    await Swal.fire('Editado correctamente')
  }

  const error = async () => {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se ha podido guardar cambios!',
    })
  }

  const handleData = (data) => {
    const post = {
      id: blogPost._id,
      title: data.title,
      description: data.description,
      image: postImg === null ? blogPost.image : postImg,
      status: true,
      categories: data.categories,
      tags: data.tags,
      files: null,
    }
    console.log(post)
    dispatch(editBlog(post))
    confirmation.message && alert(confirmation)
    confirmation.errors && error(confirmation)
  }

  return (
    console.log(blogPost.tags),
    (
      <>
        <h2>Editar</h2>
        <div className="toggle">
          <ToggleButton
            className={`${active ? ' active' : ''}`}
            type="button"
            onClick={handleClick}
            aria-pressed={blogPost.status}
            autoComplete="off"
          >
            <div className="handle"></div>
          </ToggleButton>
        </div>
        <FormBody>
          <form onSubmit={handleSubmit(handleData)}>
            <label>
              Titulo:
              <input {...register('title', { min: 10, max: 75 })} />
            </label>
            <span>slug: {blogPost.slug}</span>
            <div className="editImg">
              {!newImg ? (
                <>
                  <span>Imagen de portada:</span>
                  <img src={blogPost.image} alt={blogPost.title} />{' '}
                  <button onClick={() => setNewImg(true)}>
                    Cambiar Imagen
                  </button>
                </>
              ) : (
                <>
                  <span>Cargar nueva imagen:</span>
                  <FileUploader folder="blog" />
                  <button onClick={() => setNewImg(false)}>Cancelar</button>
                </>
              )}
            </div>
            <label>
              Descripción
              <textarea
                rows="10"
                {...register('description', { min: 50, max: 2000 })}
              />
            </label>

            <div className="checkboxBlock">
              <span>Categorias:</span>
              {categories.map((category) => (
                <label key={category.name}>
                  <input
                    type="checkbox"
                    value={category._id}
                    defaultChecked={blogPost.categories?.some(
                      (c) => c._id === category._id
                    )}
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
                    defaultChecked={blogPost.tags?.some((t) => t === tag._id)}
                    value={tag._id}
                    placeholder={tag.name}
                    {...register('tags', {})}
                  />
                  <span>{tag.name}</span>
                </label>
              ))}
            </div>
            {/* <span>Cargar PDF:</span>
          <FileUploader folder="files" /> */}
            <input type="submit" value="Actualizar publicación" />
          </form>
        </FormBody>
      </>
    )
  )
}
