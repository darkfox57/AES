import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addEvent, getAllEvents } from '../../../../redux/actions/event_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { modules } from '../../../../utils/Modules_quill/modules'
import { FormBody } from './addEvent.styles'

export default function AddEvent() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)
  const estado = useSelector((state) => state.blog.status)
  const postImg = useSelector((state) => state.file.fileUrl)
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
      ...data,
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
      files: null,
      date_in: new Date(data.date_in).toISOString().slice(0, 10),
      date_out: new Date(data.date_out).toISOString().slice(0, 10),
    }

    try {
      setSending(true)
      await dispatch(addEvent(post)).finally(() => dispatch(getAllEvents()))
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <h2>Crear Nuevo Evento</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { required: true })} />
          </label>
          <span>Cargar nueva imagen de portada:</span>
          <FileUploader folder="blog" />

          <div className="dates">
            <label>
              Inicio del evento
              <input
                type="datetime-local"
                placeholder="Fecha de Inicio"
                {...register('date_in', { required: true })}
              />
            </label>
            <label>
              Fin del evento
              <input
                type="datetime-local"
                placeholder="Fecha de fin"
                {...register('date_out', { required: true })}
              />
            </label>
          </div>
          <label>
            Ubicación:
            <input {...register('location', { required: true })} />
          </label>
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
