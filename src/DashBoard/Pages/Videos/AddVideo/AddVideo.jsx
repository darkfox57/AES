import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addFile, getAllFiles } from '../../../../redux/actions/gallery_actions'
import { FormBody } from './add.styles'

export default function AddVideo() {
  const { register, handleSubmit, reset } = useForm()
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  const [sending, setSending] = useState(null)
  const formRef = useRef(null)
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
      title: data.title,
      subtitle: data.subtitle,
      url: `https://www.youtube-nocookie.com/embed/${data.ytId}?controls=0`,
      status: true,
      origin: 'videos',
    }
    try {
      setSending(true)
      await dispatch(addFile(post)).finally(() => dispatch(getAllFiles()))

      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <h2>Agregar Video</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { max: 40 })} />
          </label>
          <label>
            Subtitulo:
            <input {...register('subtitle', { max: 120 })} />
          </label>
          <label>
            Video:
            <span>
              Debes subir el id del video que quieres compartir ej.
              <i>'5FOocK_QL9A'</i>
            </span>
            <input {...register('ytId')} />
          </label>
          <button
            type="submit"
            className="dashBtn"
            disabled={sending ? true : false}
          >
            Agregar video
          </button>
        </form>
      </FormBody>
    </>
  )
}
