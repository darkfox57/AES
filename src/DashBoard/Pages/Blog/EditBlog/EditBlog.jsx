import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { editBlog, getBlog } from '../../../../redux/actions/blog_actions'
import { resetBlogState } from '../../../../redux/reducer/blog_reducer'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { modules } from '../../../../utils/Modules_quill/modules'
import { FormBody, ToggleButton } from './editBlog.styles'

export default function EditBlog() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const categories = useSelector((state) => state.blog.categories)
  const postImg = useSelector((state) => state.file.fileUrl)
  const tags = useSelector((state) => state.blog.tags)
  const MySwal = withReactContent(Swal)
  const [newImg, setNewImg] = useState(false)
  const [sending, setSending] = useState(false)
  const [postContent, setPostContent] = useState('')
  useEffect(() => {
    dispatch(getBlog(slug)).then(() => {
      setLoading(false)
    })
  }, [slug])

  const blogPost = useSelector((state) => {
    if (state.blog.blog) {
      return state.blog.blog
    } else {
      return null
    }
  })

  useEffect(() => {
    setActive(blogPost.status)
    setPostContent(blogPost.description)
  }, [blogPost])

  const { register, handleSubmit, reset } = useForm()
  useEffect(() => {
    if (blogPost) {
      const { _id, title, description, image } = blogPost
      reset({
        id: _id,
        title,
        description,
        image,
        files: null,
      })
    }
  }, [blogPost, reset])

  const [active, setActive] = useState(blogPost.status)

  const handleClick = () => {
    dispatch(
      editBlog({
        ...blogPost,
        status: !blogPost.status,
        categories: blogPost.categories.map((c) => c._id),
      })
    )
    setActive(active ? false : true)
  }

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
    const post = {
      ...blogPost,
      title: data.title,
      description: postContent,
      image: postImg || blogPost.image,
      categories: data.categories,
      tags: data.tags,
    }
    try {
      setSending(true)
      await dispatch(editBlog(post))
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }
  return (
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
            <input
              defaultValue={blogPost.title}
              {...register('title', { min: 10, max: 75 })}
            />
          </label>
          <span>slug: {blogPost.slug}</span>
          <div className="editImg">
            {!newImg ? (
              <>
                <span>Imagen de portada:</span>
                <img src={blogPost.image} alt={blogPost.title} />{' '}
                <button onClick={() => setNewImg(true)}>Cambiar Imagen</button>
              </>
            ) : (
              <>
                <span>Cargar nueva imagen:</span>
                <FileUploader folder="blog" />
                <button onClick={() => setNewImg(false)}>Cancelar</button>
              </>
            )}
          </div>
          <span>Descripción</span>
          <div className="editor">
            <ReactQuill
              theme="snow"
              value={postContent}
              onChange={setPostContent}
              className="editor-input"
              modules={modules}
            ></ReactQuill>
          </div>

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
          <input
            type="submit"
            value="Actualizar publicación"
            disabled={sending ? true : false}
          />
        </form>
      </FormBody>
    </>
  )
}
