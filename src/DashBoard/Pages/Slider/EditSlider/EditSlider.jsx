import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  editFile,
  getAllFiles,
  getFile,
} from '../../../../redux/actions/gallery_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { FormBody } from './edit.styles'

export default function EditSlider() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const MySwal = withReactContent(Swal)
  const slider = useSelector((state) => state.gallery.file)
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(null)
  const [newImg, setNewImg] = useState(false)
  const postImg = useSelector((state) => state.file.fileUrl)
  useEffect(() => {
    dispatch(getFile(id))
  }, [id])

  useEffect(() => {
    if (slider) {
      const { _id, title, subtitle, url, status, origin } = slider
      reset({
        _id,
        title,
        subtitle,
        url,
        status,
        origin,
      })
    }
  }, [slider, reset])

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
      _id: data._id,
      title: data.title,
      subtitle: data.subtitle,
      url: postImg || data.url,
      status: data.status,
    }
    try {
      setSending(true)
      await dispatch(editFile(post)).finally(() => dispatch(getAllFiles()))
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <h2>Editar Banner</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input
              defaultValue={slider.title}
              {...register('title', { max: 40 })}
            />
          </label>
          <label>
            Subtitulo:
            <input
              defaultValue={slider.subtitle}
              {...register('subtitle', { max: 120 })}
            />
          </label>
          <div className="editImg">
            {!newImg ? (
              <>
                <span>Imagen de portada:</span>
                <img src={slider.url} alt={slider.title} />{' '}
                <button onClick={() => setNewImg(true)}>Cambiar Imagen</button>
              </>
            ) : (
              <>
                <span>Cargar nueva imagen:</span>
                <FileUploader folder="gallery" />
                <button onClick={() => setNewImg(false)}>Cancelar</button>
              </>
            )}
          </div>
          <input
            type="submit"
            value="Actualizar publicación"
            disabled={sending ? true : false}
          />
        </form>
      </FormBody>
    </div>
  )
}
