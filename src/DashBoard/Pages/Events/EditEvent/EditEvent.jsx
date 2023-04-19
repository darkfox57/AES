import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  deleteEvent,
  editEvent,
  getAllEvents,
  getEvent,
} from '../../../../redux/actions/event_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { modules } from '../../../../utils/Modules_quill/modules'
import EventParticipants from './Participants/Participants'
import { FormBody, ToggleButton } from './editEvent.styles'

export default function EditEvent() {
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
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getEvent(slug)).then(() => {
      setLoading(false)
    })
  }, [slug])

  const eventPost = useSelector((state) => {
    if (state.event.event) {
      return state.event.event
    } else {
      return null
    }
  })

  useEffect(() => {
    setActive(eventPost.status)
    setPostContent(eventPost.description)
  }, [eventPost])

  const { register, handleSubmit, reset } = useForm()
  useEffect(() => {
    if (eventPost) {
      const {
        _id,
        title,
        description,
        frontpage,
        short_description,
        date_in,
        date_out,
        location,
      } = eventPost
      reset({
        id: _id,
        title,
        description,
        frontpage,
        files: null,
        short_description,
        date_in,
        date_out,
        location,
      })
    }
  }, [eventPost, reset])

  const [active, setActive] = useState(eventPost.status)

  const handleClick = async () => {
    dispatch(
      editEvent({
        ...eventPost,
        status: !eventPost.status,
        categories: eventPost.categories.map((c) => c._id),
        image: eventPost.frontpage,
        start: eventPost.date_in,
        end: eventPost.date_out,
        // start: new Date(eventPost.date_in).toISOString().slice(0, 10),
        // end: new Date(eventPost.date_out).toISOString().slice(0, 10),
      })
    ).finally(() => dispatch(getAllEvents()))

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
      ...eventPost,
      title: data.title,
      description: postContent,
      image: postImg || eventPost.frontpage,
      categories: data.categories,
      tags: data.tags,
      short_description: data.short_description,
      start:
        data.date_in ||
        new Date(eventPost.date_out).toLocaleDateString('es-ES'),
      end:
        data.date_out ||
        new Date(eventPost.date_out).toLocaleDateString('es-ES'),
    }
    try {
      setSending(true)
      // console.log(post)
      await dispatch(editEvent(post)).finally(() => dispatch(getAllEvents()))
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteEvent(eventPost._id)).finally(() =>
        dispatch(getAllEvents())
      )
      return navigate('/dashboard/eventos')
    } catch (error) {
      return console.log(error)
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <h2>Editar</h2>

      <FormBody>
        <div className="editBtns">
          <div className="toggle">
            <span>Cambiar estado:</span>
            <ToggleButton
              className={`${active ? ' active' : ''}`}
              type="button"
              onClick={handleClick}
              aria-pressed={eventPost.status}
              autoComplete="off"
            >
              <div className="handle"></div>
            </ToggleButton>
          </div>
          <div className="dashBtn" onClick={handleDelete}>
            Eliminar
          </div>
        </div>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input
              defaultValue={eventPost.title}
              {...register('title', { min: 10, max: 75 })}
            />
          </label>
          <span>slug: {eventPost.slug}</span>
          <div className="editImg">
            {!newImg ? (
              <>
                <span>Imagen de portada:</span>
                <img src={eventPost.frontpage} alt={eventPost.title} />{' '}
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
          <div className="dates">
            <label>
              Inicio del evento
              <input
                defaultValue={eventPost.date_in}
                type="datetime-local"
                {...register('date_in')}
              />
            </label>
            <label>
              Fin del evento
              <input
                defaultValue={eventPost.date_out}
                type="datetime-local"
                {...register('date_out')}
              />
            </label>
          </div>
          <label>
            Ubicación:
            <input
              defaultValue={eventPost.location}
              {...register('location')}
            />
          </label>
          <label>
            Descripción corta
            <textarea
              defaultValue={eventPost.short_description}
              rows="3"
              {...register('short_description', {
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
                  defaultChecked={eventPost.categories?.some(
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
                  defaultChecked={eventPost.tags?.some((t) => t === tag._id)}
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
      <EventParticipants id={eventPost._id} />
    </>
  )
}
