import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addBlog, getAllBlogs } from '../../../../redux/actions/blog_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import PdfUploader from '../../../../utils/FileUploader/pdfUploader'
import { modules } from '../../../../utils/Modules_quill/modules'
import { FormBody } from './addBlog.styles'

export default function AddBlog() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)
  const estado = useSelector((state) => state.blog.status)
  const postImg = useSelector((state) => state.file.fileUrl)
  const postPdf = useSelector((state) => state.file.pdfUrl)
  const MySwal = withReactContent(Swal)
  const [sending, setSending] = useState(false)

  const [postContent, setPostContent] = useState('')
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
    const post = {
      slug: data.title
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-'),
      title: data.title,
      description: postContent,
      image: postImg,
      categories: data.categories,
      status: true,
      tags: data.tags,
      files: postPdf,
      short_description: data.short_description,
    }
    try {
      setSending(true)
      await dispatch(addBlog(post)).finally(() => dispatch(getAllBlogs()))
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
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
            Descripción corta
            <textarea
              rows="5"
              {...register('short_description', {
                required: true,
                maxLength: 160,
              })}
            />
          </label>
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
          <p>Subir pdf</p>
          <PdfUploader />
          <div className="checkboxBlock">
            <span>Categorias:</span>
            {categories.map((category) => (
              <label key={category.name}>
                <input
                  type="checkbox"
                  value={category._id}
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
